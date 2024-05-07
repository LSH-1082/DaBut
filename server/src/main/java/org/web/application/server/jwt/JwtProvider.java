package org.web.application.server.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

@Component
public class JwtProvider {

    @Value("${spring.jwt.secret}")
    private String secretKey;

    /**
     * @날짜: 240502
     * @기능: Jwt 생성
     * @작성자: 임재현
     */
    public String create(String userId) {
        Date expiredDate = Date.from(Instant.now().plus(1, ChronoUnit.HOURS));
        Key key = Keys.hmacShaKeyFor(secretKey.getBytes(StandardCharsets.UTF_8));

        String jwt = Jwts.builder()
                .signWith(key, SignatureAlgorithm.HS256)
                .setSubject(userId).setIssuedAt(new Date()).setExpiration(expiredDate)
                .compact();

        return jwt;
    }


    /**
     * @날짜: 240502
     * @기능: Jwt 검증
     * @작성자: 임재현
     */
    public String validate(String jwt) {
        String subject = null;
        Key key = Keys.hmacShaKeyFor(secretKey.getBytes(StandardCharsets.UTF_8));
        try {
            subject = Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(jwt)
                    .getBody()
                    .getSubject();

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

        return subject;
    }


    /**
     * 리퀘스트 객체 > 베어러 토큰 인증정보를 꺼내옴 > 토큰 검증 과정 >
     *
     * 필터 에서 서블렛으로 넘겨줘야함
     *
     * 컨텍스트를 만듦 > bean
     * 시큐리티 정보 컨텍스트 접근 주체 정보를 담아줌
     * 콘텍스트 안에 토큰 넣어주고 빈에 등록
     *
     * 서블렛 안에 컨트롤러 여러개
     */

}

