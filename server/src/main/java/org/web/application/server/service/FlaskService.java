package org.web.application.server.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;
import org.web.application.server.dto.MatchingDTO;
import org.web.application.server.jwt.JwtProvider;
import org.web.application.server.repository.AuthRepository;
import org.web.application.server.repository.UserRepository;

@Service
@RequiredArgsConstructor
public class FlaskService {
    //데이터를 JSON 객체로 변환하기 위해서 사용
    private final ObjectMapper objectMapper;
    private final JwtProvider jwtProvider;
    private final AuthRepository authRepository;
    private final UserRepository userRepository;

    @Transactional
    public String sendToFlask(String token) throws JsonProcessingException
    {
        String kakaoId = jwtProvider.validate(token);

        var authEntity = authRepository.findByKakaoId(Long.valueOf(kakaoId)).orElse(null);

        var userEntity = userRepository.findByAuthEntity(authEntity).orElse(null);

        MatchingDTO matchingDto = MatchingDTO.builder().build();




        RestTemplate restTemplate = new RestTemplate();
        //헤더를 JSON으로 설정함
        HttpHeaders headers = new HttpHeaders();
        //파라미터로 들어온 dto를 JSON 객체로 변환
        headers.setContentType(MediaType.APPLICATION_JSON);

        String param = objectMapper.writeValueAsString(matchingDto);

        HttpEntity<String> entity = new HttpEntity<String>(param, headers);
        //실제 Flask 서버랑 연결하기 위한 URL
        String url = "http://127.0.0.1:5000/receive_string";
        //Flask 서버로 데이터를 전송하고 받은 응답 값을 return
        return restTemplate.postForObject(url, entity, String.class);
    }
}
