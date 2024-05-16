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
import org.web.application.server.dto.RoommateMatchingDTO;
import org.web.application.server.dto.UserDTO;
import org.web.application.server.entity.MatchingFilterEntity;
import org.web.application.server.entity.MatchingHistoryEntity;
import org.web.application.server.entity.UserEntity;
import org.web.application.server.jwt.JwtProvider;
import org.web.application.server.repository.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FlaskService {
    //데이터를 JSON 객체로 변환하기 위해서 사용
    private final ObjectMapper objectMapper;
    private final JwtProvider jwtProvider;
    private final AuthRepository authRepository;
    private final UserRepository userRepository;
    private final MatchingFilterRepository matchingFilterRepository;
    private final MatchingHistoryRepository matchingHistoryRepository;
    private final RoommateFilterRepository roommateFilterRepository;

    @Transactional
    public String sendToFlask(String token) throws JsonProcessingException {
        System.out.println("FlaskService.sendToFlask");

        String kakaoId = jwtProvider.validate(token);

        var authEntity = authRepository.findByKakaoId(Long.valueOf(kakaoId)).orElse(null);

        var userEntity = userRepository.findByAuthEntity(authEntity).orElse(null);

        var matchingFilterEntity = matchingFilterRepository.findByUserEntity(userEntity).orElse(null);

        //var roommateFilterEntity = roommateFilterRepository.findByUserEntity(userEntity);

        System.out.println("matchingFilterEntity = " + matchingFilterEntity);

        List<UserEntity> filteredUserList = null;
        List<MatchingDTO> matchingDTOs = null;

//        List<RoommateMatchingDTO> roommateMatchingDTO;
//        if(authEntity != null && userEntity != null && matchingFilterEntity != null && roommateFilterEntity != null) {
//            int roommateminAge;
//            int roommatemaxAge;
//            switch (roommateFilterEntity) {
//                case "20대":
//                    roommateminAge = 20;
//                    roommatemaxAge = 29;
//                    break;
//                case "30대":
//                    roommateminAge = 30;
//                    roommatemaxAge = 39;
//                    break;
//                case "40대":
//                    roommateminAge = 40;
//                    roommatemaxAge = 49;
//                    break;
//                default:
//                    roommateminAge = 0;
//                    roommatemaxAge = 0;
//                    break;
//            }
//        }

        /**
         * 240514 임재현
         * user가 매칭하러가기를 누르고 프론트로부터 받은 token정보를 바탕으로
         * 해당 user의 매칭필터 내용을 가져와 1차적으로 user테이블에서 데이터를 정제
         */
        List<MatchingDTO> matchingDTOList;
        if (authEntity != null && userEntity != null && matchingFilterEntity != null) {
            int minAge;
            int maxAge;
            switch (matchingFilterEntity.getAge()) {
                case "20대":
                    minAge = 20;
                    maxAge = 29;
                    break;
                case "30대":
                    minAge = 30;
                    maxAge = 39;
                    break;
                case "40대":
                    minAge = 40;
                    maxAge = 49;
                    break;
                default:
                    minAge = 0;
                    maxAge = 0;
                    break;
            }

            filteredUserList = userRepository.findByMatchingStateAndGenderEntityGenderAndSmokingAndLocationEntityLocationNameAndAgeBetween(
                    userEntity.getMatchingState(),
                    matchingFilterEntity.getGenderEntity().getGender(),
                    matchingFilterEntity.getSmoking(),
                    userEntity.getLocationEntity().getLocationName(),
                    minAge, maxAge).orElse(null);


            UserEntity firstUser = filteredUserList.get(0);
            System.out.println("Filtered User Name: " + firstUser.getName());


            List<UserEntity> jiinlist = new ArrayList<>();

            jiinlist.add(userEntity);

            for (int i = 0; i < filteredUserList.size(); i++) {
                // 거른 후 친구의 Entity
                var filteredUserEntity = filteredUserList.get(i);

                // 필터를 걸러서 가져온 정보를 바탕으로 내정보를 가져와서 비교하기
                // 매칭 결과에 맞는 사람들의 Entity
                // 친구가 원하는 친구의 정보
                var filteredMatchingFilterEntity = matchingFilterRepository.findByUserEntity(filteredUserEntity).orElse(null);
                //System.out.println("getGenderEntity: " + filteredMatchingFilterEntity.getGenderEntity());

                if (!filteredMatchingFilterEntity.getSmoking().equals(userEntity.getSmoking())) {
                    continue;
                }
                if (filteredMatchingFilterEntity.getGenderEntity() != userEntity.getGenderEntity()) {
                    continue;
                }
                if (!Objects.equals(filteredMatchingFilterEntity.getHeight(), userEntity.getHeightEntity().getHeight())) {
                    continue;
                }
                int filterminAge = 0;
                int filtermaxAge = 0;
                switch (filteredMatchingFilterEntity.getAge()) {
                    case "20대":
                        filterminAge = 20;
                        filtermaxAge = 29;
                        break;
                    case "30대":
                        filterminAge = 30;
                        filtermaxAge = 39;
                        break;
                    case "40대":
                        filterminAge = 40;
                        filtermaxAge = 49;
                        break;
                    default:
                        filterminAge = 0;
                        filtermaxAge = 0;
                        break;
                }
                if (userEntity.getAge() >= filtermaxAge || userEntity.getAge() <= filterminAge) {
                    continue;
                }

                jiinlist.add(filteredUserEntity);

            }
            System.out.println("jinList Size : " + jiinlist.size());
            System.out.println("jiinlist = " + jiinlist.get(0).getName());
            System.out.println("jiinlist = " + jiinlist.get(1).getName());
            System.out.println("jiinlist = " + jiinlist.get(2).getName());


            matchingDTOList = jiinlist.stream()
                    .map(user -> MatchingDTO.builder()
                            .age(user.getAge())
                            .userId(user.getUserId())
                            .faceShape(user.getFaceShapeEntity().getFaceShapeName())
                            .mbti(user.getMbtiEntity().getMbtiName())
                            .personality(user.getPersonalityEntity().getPersonalityName())
                            .snsFrequency(user.getSnsFrequencyEntity().getSnsFrequencyLevel())
                            .major(user.getMajorEntity().getMajorName())
                            // 필요한 다른 필드 추가
                            .build())
                    .toList();


            System.out.println("matchingDtoList = " + matchingDTOList.get(0).getUserId());
        } else {
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


        RestTemplate restTemplate = new RestTemplate();
        //헤더를 JSON으로 설정함
        HttpHeaders headers = new HttpHeaders();
        //파라미터로 들어온 dto를 JSON 객체로 변환
        headers.setContentType(MediaType.APPLICATION_JSON);

        String param = objectMapper.writeValueAsString(matchingDTOList);

        HttpEntity<String> entity = new HttpEntity<>(param, headers);
        //실제 Flask 서버랑 연결하기 위한 URL
        String url = "http://127.0.0.1:5000/receive_string";
        //Flask 서버로 데이터를 전송하고 받은 응답 값을 return
        //restTemplate.postForObject(url, entity, String.class);

        // 아이디 2개가 왔어, List가 하나가 왔어 size = 2m 0번째가 주(firstUser), 1번째가 가장 유사도가 높은곳에 넣어
        Long user = Long.valueOf(restTemplate.postForObject(url, entity, String.class));

        MatchingHistoryEntity matchingHistoryEntity = MatchingHistoryEntity.builder()
                .reqUserEntity(userEntity)
                .resUserEntity(userRepository.findByUserId(user).orElse(null)).build();

        matchingHistoryRepository.save(matchingHistoryEntity);

    }
}
