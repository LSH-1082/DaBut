package org.web.application.server.config;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.config.annotation.web.configurers.HttpBasicConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.web.application.server.jwt.JwtAuthenticationFilter;
import org.web.application.server.oauth2.OAuth2SuccessHandler;

import java.io.IOException;

//
@Configuration
//어노테이션 빈을 등록 할 수 있도록
@Configurable
@EnableWebSecurity
@RequiredArgsConstructor
public class WebSecurityConfig {
    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    private final DefaultOAuth2UserService oAuth2UserService;
    private final OAuth2SuccessHandler oAuth2SuccessHandler;

    @Bean
    protected SecurityFilterChain configure(HttpSecurity httpSecurity) throws Exception
    {
        httpSecurity
                .cors(cors->cors.configurationSource(corsConfigurationSource()))
                .csrf(CsrfConfigurer::disable)
                //베어러 인증방식이 아닌 디폴트인 베이직 방식 disable
                .httpBasic(HttpBasicConfigurer::disable)
                //세션처리 disable
                .sessionManagement(sessionManagement->sessionManagement
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(request->request
                        .requestMatchers("/**", "/api/v1/auth/**", "/oauth2/**","/login/**","/oauth2/callback/**").permitAll()
                        .requestMatchers("/api/vi/user/**").hasRole("USER")
                        .requestMatchers("/api/v1").hasRole("ADMIN")
                        .anyRequest().authenticated()
                )
                .oauth2Login(oauth2->oauth2
                        .authorizationEndpoint(endpoint->endpoint.baseUri("/api/v1/auth/oauth2"))
                        .redirectionEndpoint(endpoint->endpoint.baseUri("/oauth2/callback/*"))
                        .userInfoEndpoint(endpoint->endpoint.userService(oAuth2UserService))
                        .successHandler(oAuth2SuccessHandler)
                )
                .exceptionHandling(exceptionHandling->exceptionHandling.authenticationEntryPoint(new FailedAuthenticationEntryPoint()))
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return httpSecurity.build();
    }

    @Bean
    protected CorsConfigurationSource corsConfigurationSource()
    {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.addAllowedOrigin("*");
        corsConfiguration.addAllowedMethod("*");
        corsConfiguration.addAllowedHeader("*");

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfiguration);

        return source;
    }
}

/**
 * @날짜: 240502
 * @기능: 권한이 없는 것에 대한 인증 실패 처리
 * @작성자: 임재현
 */
class FailedAuthenticationEntryPoint implements AuthenticationEntryPoint{

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authenticationException) throws IOException, ServletException{
        response.setContentType("application/json");
        response.setStatus(HttpServletResponse.SC_FORBIDDEN);
        // {"code":"NP", "message":"No Permission."}
        response.getWriter().write("{\"code\":\"NP\", \"message\":\"No Permission.\"}");
    }
}