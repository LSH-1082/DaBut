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
import org.web.application.server.entity.MatchingFilterEntity;
import org.web.application.server.entity.UserEntity;
import org.web.application.server.jwt.JwtProvider;
import org.web.application.server.repository.AuthRepository;
import org.web.application.server.repository.MatchingFilterRepository;
import org.web.application.server.repository.UserRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FlaskService {
    //데이터를 JSON 객체로 변환하기 위해서 사용
    private final ObjectMapper objectMapper;
    private final JwtProvider jwtProvider;
    private final AuthRepository authRepository;
    private final UserRepository userRepository;
    private final MatchingFilterRepository matchingFilterRepository;

    @Transactional
    public String sendToFlask(String token) throws JsonProcessingException
    {
        System.out.println("FlaskService.sendToFlask");

        String kakaoId = jwtProvider.validate(token);

        var authEntity = authRepository.findByKakaoId(Long.valueOf(kakaoId)).orElse(null);

        var userEntity = userRepository.findByAuthEntity(authEntity).orElse(null);

        var matchingFilterEntity = matchingFilterRepository.findByUserEntity(userEntity).orElse(null);

        System.out.println("matchingFilterEntity = " + matchingFilterEntity);

        List<UserEntity> filteredUserList = null;
        List<MatchingDTO> matchingDTOs = null;


        /**
         * 240514 임재현
         * user가 매칭하러가기를 누르고 프론트로부터 받은 token정보를 바탕으로
         * 해당 user의 매칭필터 내용을 가져와 1차적으로 user테이블에서 데이터를 정제
         */
        if(authEntity != null && userEntity!= null && matchingFilterEntity !=null)
        {
            filteredUserList = userRepository.findByMatchingStateAndGenderEntityGenderAndSmoking(
                    userEntity.getMatchingState(),
                    matchingFilterEntity.getGenderEntity().getGender(),
                    matchingFilterEntity.getSmoking()).orElse(null);

            System.out.println("filteredUserList : " + filteredUserList);

            //for
        }
        else
        {
            return null;
        }




        //사용자가 매칭하기를 누름 > DB에 매칭 상태 변환 >
        //기존에 걸러야 할 사항들
        //성별 if문으로 거름
        //선호 나이의 개념 > 본인이 25이고 선호 나이가 20이면 25와 가까운 숫자일 수록 높은 유사도가 나오도록
        //흡연유무 if문으로 거름
        //선호 직업 > 유사도 측정
        //거주지
        //결국은 flask에서 db를 또 연결해줘야?



        MatchingDTO matchingDto = MatchingDTO.builder().build();



        RestTemplate restTemplate = new RestTemplate();
        //헤더를 JSON으로 설정함
        HttpHeaders headers = new HttpHeaders();
        //파라미터로 들어온 dto를 JSON 객체로 변환
        headers.setContentType(MediaType.APPLICATION_JSON);

        String param = objectMapper.writeValueAsString(matchingDto);

        HttpEntity<String> entity = new HttpEntity<>(param, headers);
        //실제 Flask 서버랑 연결하기 위한 URL
        String url = "http://127.0.0.1:5000/receive_string";
        //Flask 서버로 데이터를 전송하고 받은 응답 값을 return
        return restTemplate.postForObject(url, entity, String.class);
    }
}
