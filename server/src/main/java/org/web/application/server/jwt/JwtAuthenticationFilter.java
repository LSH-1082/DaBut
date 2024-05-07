package org.web.application.server.jwt;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;
import org.web.application.server.entity.AuthEntity;
import org.web.application.server.entity.UserEntity;
import org.web.application.server.repository.UserRepository;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtProvider jwtProvider;
    private final UserRepository userRepository;

    /**
     * @날짜: 240502
     * @기능: Jwt 인증 필터
     * @작성자: 임재현
     */
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try
        {
            String token = parseBearerToken(request);
            if(token == null)
            {
                filterChain.doFilter(request, response);
                return;
            }

            String userId = jwtProvider.validate(token);
            System.out.println("JwtAuthenticationFilter : userId : " + userId);
            if(userId == null)
            {
                filterChain.doFilter(request, response);
                return;
            }

            UserEntity userEntity = userRepository.findByAccount(userId);
            String role = userEntity.getRole(); // role : ROLE_USER, ROLE_ADMIN

            //ROLE_DEVELOPER, ROLE_BOSS같은 역할 생성
            List<GrantedAuthority> authorities = new ArrayList<>();
            authorities.add(new SimpleGrantedAuthority(role));

            // 1. 빈 컨텍스트를 만들기
            SecurityContext securityContext = SecurityContextHolder.createEmptyContext();
            // 2. 컨텍스트 안에 토큰 담기 (userId,userPw,userRole 리스트 형태)
            AbstractAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userId, null, authorities);
            // 3. 리퀘스트에 추가
            authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
            // 4. 리퀘스트에 등록
            SecurityContextHolder.setContext(securityContext);
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }

        filterChain.doFilter(request, response);
    }

    private String parseBearerToken(HttpServletRequest request)
    {
        String authorization = request.getHeader("Authorization");

        boolean hasAuthorization = StringUtils.hasText(authorization);
        if(!hasAuthorization) return null;

        boolean isBearer = authorization.startsWith("Bearer ");
        if(!isBearer) return null;

        String token = authorization.substring(7);
        return token;
    }
}
