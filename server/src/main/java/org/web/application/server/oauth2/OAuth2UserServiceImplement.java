package org.web.application.server.oauth2;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import org.web.application.server.entity.AuthEntity;
import org.web.application.server.entity.UserEntity;
import org.web.application.server.repository.AuthRepository;
import org.web.application.server.repository.UserRepository;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class OAuth2UserServiceImplement extends DefaultOAuth2UserService {

    private final AuthRepository authRepository;
    @Override
    public OAuth2User loadUser(OAuth2UserRequest request) throws OAuth2AuthenticationException {

        OAuth2User oAuth2User = super.loadUser(request);
        String oauthClientName = request.getClientRegistration().getClientName();

        try
        {
            System.out.println(new ObjectMapper().writeValueAsString(oAuth2User.getAttributes()));
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }

        AuthEntity authEntity = null;
        Long userId = null;
        String connectedAt = null;
        Map<String, Object> kakaoAccount = null;
        String userEmail = null;

        if(oauthClientName.equals("kakao"))
        {
            System.out.println("oauthClientName : " + oauthClientName);
            userId = (Long) oAuth2User.getAttributes().get("id");
            connectedAt = (String) oAuth2User.getAttributes().get("connected_at");
            kakaoAccount = (Map<String, Object>) oAuth2User.getAttributes().get("kakao_account");
            userEmail = (String) kakaoAccount.get("email");
            System.out.println("userId : "+ userId);
            System.out.println("email : " + userEmail);

            authEntity = AuthEntity.builder()
                    .kakaoId(userId)
                    .userEmail(userEmail)
                    .connectedAt(connectedAt).build();
        }

        authRepository.save(authEntity);

        System.out.println("OAuth2UserServiceImplement : oAuth2User : " + oAuth2User);
        return oAuth2User;
    }
}
