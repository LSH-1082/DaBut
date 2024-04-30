package org.web.application.server.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@RequiredArgsConstructor
@RequestMapping("/login")
public class LoginController {

    String clientId = "f131c2fceabc2389e6bb83d94e7975d2";
    /**

     카카오톡 로그인 API*/

    @GetMapping("/kakao")
    public String kakaoLogin(String code)
    {
        System.out.println(code);

        String grantType = "authorization_code";

        String redirectUri = "http://localhost:8080/login/kakao";
        String requestBody = String.format("grant_type=%s&client_id=%s&redirect_uri=%s&code=%s", grantType, clientId, redirectUri, code);

        RestTemplate restTemplate = new RestTemplate();

        String tokenUrl = "https://kauth.kakao.com/oauth/token";


        // HTTP 헤더 설정
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        // 요청 엔티티 생성 (헤더와 요청 데이터 설정)
        HttpEntity<String> requestEntity = new HttpEntity<>(requestBody, headers);

        // POST 요청 보내기
        ResponseEntity<String> response = restTemplate.postForEntity(tokenUrl, requestEntity, String.class);

        // 응답 데이터 가져오기
        String responseBody = response.getBody();

        return responseBody;
    }

    @GetMapping("/token")
    public void token(@RequestParam String access_token){
        System.out.println(access_token);
    }
}
