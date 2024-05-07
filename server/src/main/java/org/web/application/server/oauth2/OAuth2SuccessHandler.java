package org.web.application.server.oauth2;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.web.application.server.jwt.JwtProvider;

import java.io.IOException;
import java.util.Map;

@Component
@RequiredArgsConstructor
public class OAuth2SuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final JwtProvider jwtProvider;
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
//        CustomOAuth2User oAuth2User = (CustomOAuth2User) authentication.getPrincipal();
        DefaultOAuth2User oAuth2User = (DefaultOAuth2User) authentication.getPrincipal();
//        Object principal = authentication.getPrincipal();
//        if(principal instanceof DefaultOAuth2User)
//        {
//            DefaultOAuth2User oAuth2User = (DefaultOAuth2User) principal;
//            Map<String, Object> attributes = oAuth2User.getAttributes();
//            oAuth2User.getName();
//        }
        System.out.println("authentication : " + authentication);
        System.out.println("authentication.getPrincipal() : " + authentication.getPrincipal());
        System.out.println("authentication.getPrincipal().getClass() : " + authentication.getPrincipal().getClass());

        System.out.println("테스트");
//
        String userId = oAuth2User.getName();
        String token = jwtProvider.create(userId);
        System.out.println(userId);
        System.out.println(token);
//
        response.sendRedirect("http://localhost:3000/register/" + token);
//        response.sendRedirect("http://localhost:3000/auth/oauth-response/3600");
    }

}
