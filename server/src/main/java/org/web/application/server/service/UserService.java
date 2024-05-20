package org.web.application.server.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.web.application.server.dto.EditFriendDTO;
import org.web.application.server.dto.EditUserDTO;
import org.web.application.server.dto.MyPageDTO;
import org.web.application.server.dto.UserDTO;
import org.web.application.server.entity.*;
import org.web.application.server.jwt.JwtProvider;
import org.web.application.server.repository.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {

    private final UserRepository userRepository;
    private final GenderRepository genderRepository;
    private final HeightRepository heightRepository;
    private final OccupationRepository occupationRepository;
    private final MajorRepository majorRepository;
    private final WeightRepository weightRepository;
    private final MbtiRepository mbtiRepository;
    private final SnsFrequencyRepository snsFrequencyRepository;
    private final PersonalityRepository personalityRepository;
    private final FaceShapeRepository faceShapeRepository;
    private final MatchingFilterRepository matchingFilterRepository;
    private final LocationRepository locationRepository;
    private final AuthRepository authRepository;
    private final JwtProvider jwtProvider;
    private final MatchingHistoryRepository matchingHistoryRepository;

    public void saveUser(UserDTO userDTO, String token) {
        //UserDTO를 UserEntity로 변환
        UserEntity userEntity = toUserEntity(userDTO, token);
        System.out.println("Saving user: " + userEntity);
        //UserRepository에 UserEntity로 저장
        userRepository.save(userEntity);
    }

    public UserEntity toUserEntity(UserDTO userDTO, String token) {

        UserEntity userEntity = UserEntity.builder()
                .name(userDTO.getName())
                .genderEntity(genderRepository.findByGender(userDTO.getGender()).orElse(null))
                .age(userDTO.getAge())
                .kakaoId(userDTO.getKakaoId())
                .nickname(userDTO.getNickname())
                .heightEntity(heightRepository.findByHeight(userDTO.getHeight()).orElse(null))
                .faceShapeEntity(faceShapeRepository.findByFaceShapeName(userDTO.getFace()).orElse(null))
                .snsFrequencyEntity(snsFrequencyRepository.findBySnsFrequencyLevel(userDTO.getFrequency()).orElse(null))
                .profile(userDTO.getIntro())
                .majorEntity(majorRepository.findByMajorName(userDTO.getMajor()).orElse(null))
                .mbtiEntity(mbtiRepository.findByMbtiName(userDTO.getMbti()).orElse(null))
                .occupationEntity(occupationRepository.findByOccupationName(userDTO.getOccupation()).orElse(null))
                .personalityEntity(personalityRepository.findByPersonalityName(userDTO.getPersonality()).orElse(null))
                .smoking(userDTO.isSmoke())
                .locationEntity(locationRepository.findByLocationName(userDTO.getState()).orElse(null))
                .weightEntity(weightRepository.findByWeightName(userDTO.getWeight()).orElse(null))
                .authEntity(authRepository.findByKakaoId(Long.valueOf(jwtProvider.validate(token))).get())
                .build();

        userRepository.save(userEntity);


        // MatchingFilterEntity를 생성
        MatchingFilterEntity matchingFilterEntity = MatchingFilterEntity.builder()
                .age(userDTO.getWantAge())
                .height(userDTO.getWantHeight())
                .smoking(userDTO.isWantSmoke())
                .userEntity(userEntity)
                .genderEntity(genderRepository.findByGender(userDTO.getWantGender()).orElse(null))
                .occupationEntity(occupationRepository.findByOccupationName(userDTO.getWantOccupation()).orElse(null))
                .build();

        //matchingFilterRepository에 matchingFilterEntity 저장
        matchingFilterRepository.save(matchingFilterEntity);

        return userEntity;
    }

    @Transactional
    public MyPageDTO getMypage(String token)
    {
        System.out.println("=========getMypage()==============");
        System.out.println("token = " + token);

        String kakaoId = jwtProvider.validate(token);

        System.out.println("kakaoId : " + kakaoId);

        var authEntity = authRepository.findByKakaoId(Long.valueOf(kakaoId)).orElse(null);

        System.out.println("authEntity : " + authEntity);

        var userEntity = userRepository.findByAuthEntity(authEntity).orElse(null);

        System.out.println("userEntity : " + userEntity);

        return MyPageDTO.builder()
                .mbti(userEntity.getMbtiEntity().getMbtiName())
                .name(userEntity.getName())
                .gender(userEntity.getGenderEntity().getGender())
                .connectedAt(authEntity.getConnectedAt())
                .age(userEntity.getAge())
                .kakaoId(userEntity.getKakaoId())
                .location(userEntity.getLocationEntity().getLocationName())
                .ninckname(userEntity.getNickname()).build();
    }


    public void editUser(EditUserDTO editUserDTO, String token) {

        String kakaoId = jwtProvider.validate(token);

        System.out.println("kakaoId : " + kakaoId);

        var authEntity = authRepository.findByKakaoId(Long.valueOf(kakaoId)).orElse(null);

        System.out.println("authEntity : " + authEntity);

        var userEntity = userRepository.findByAuthEntity(authEntity).orElse(null);

        System.out.println("userEntity : " + userEntity);

        userEntity.setName(editUserDTO.getName());
        userEntity.setGenderEntity(genderRepository.findByGender(editUserDTO.getGender()).orElse(null));
        userEntity.setAge(editUserDTO.getAge());
        userEntity.setKakaoId(editUserDTO.getKakaoId());
        userEntity.setNickname(editUserDTO.getNickname());
        userEntity.setHeightEntity(heightRepository.findByHeight(editUserDTO.getHeight()).orElse(null));
        userEntity.setFaceShapeEntity(faceShapeRepository.findByFaceShapeName(editUserDTO.getFace()).orElse(null));
        userEntity.setSnsFrequencyEntity(snsFrequencyRepository.findBySnsFrequencyLevel(editUserDTO.getFrequency()).orElse(null));
        userEntity.setProfile(editUserDTO.getIntro());
        userEntity.setMajorEntity(majorRepository.findByMajorName(editUserDTO.getMajor()).orElse(null));
        userEntity.setMbtiEntity(mbtiRepository.findByMbtiName(editUserDTO.getMbti()).orElse(null));
        userEntity.setOccupationEntity(occupationRepository.findByOccupationName(editUserDTO.getOccupation()).orElse(null));
        userEntity.setPersonalityEntity(personalityRepository.findByPersonalityName(editUserDTO.getPersonality()).orElse(null));
        userEntity.setSmoking(editUserDTO.isSmoke());
        userEntity.setLocationEntity(locationRepository.findByLocationName(editUserDTO.getState()).orElse(null));
        userEntity.setWeightEntity(weightRepository.findByWeightName(editUserDTO.getWeight()).orElse(null));

        userRepository.save(userEntity);
    }

    public void editFriend(EditFriendDTO editFriendDTO, String token) {
        System.out.println("=========getUser()==============");
        String kakaoId = jwtProvider.validate(token);

        System.out.println("kakaoId : " + kakaoId);

        var authEntity = authRepository.findByKakaoId(Long.valueOf(kakaoId)).orElse(null);

        System.out.println("authEntity : " + authEntity);

        var userEntity = userRepository.findByAuthEntity(authEntity).orElse(null);

        System.out.println("userEntity : " + userEntity);

        var matchingFilterEntity = matchingFilterRepository.findByUserEntity(userEntity).orElse(null);

        matchingFilterEntity.setAge(editFriendDTO.getWantAge());
        matchingFilterEntity.setHeight(editFriendDTO.getWantHeight());
        matchingFilterEntity.setGenderEntity(genderRepository.findByGender(editFriendDTO.getWantGender()).orElse(null));
        matchingFilterEntity.setOccupationEntity(occupationRepository.findByOccupationName(editFriendDTO.getWantOccupation()).orElse(null));
        matchingFilterEntity.setSmoking(editFriendDTO.isWantSmoke());

        matchingFilterRepository.save(matchingFilterEntity);
    }



    @Transactional
    public UserDTO getAll(String token) {

        String kakaoId = jwtProvider.validate(token);
        var authEntity = authRepository.findByKakaoId(Long.valueOf(kakaoId)).orElse(null);
        var userEntity = userRepository.findByAuthEntity(authEntity).orElse(null);
        var matchingFilterEntity = matchingFilterRepository.findByUserEntity(userEntity).orElse(null);

        return UserDTO.builder()
                .name(userEntity.getName())
                .gender(userEntity.getGenderEntity().getGender())
                .age(userEntity.getAge())
                .kakaoId(userEntity.getKakaoId())
                .nickname(userEntity.getNickname())
                .height(userEntity.getHeightEntity().getHeight())
                .face(userEntity.getFaceShapeEntity().getFaceShapeName())
                .frequency(userEntity.getSnsFrequencyEntity().getSnsFrequencyLevel())
                .intro(userEntity.getProfile())
                .major(userEntity.getMajorEntity().getMajorName())
                .mbti(userEntity.getMbtiEntity().getMbtiName())
                .occupation(userEntity.getOccupationEntity().getOccupationName())
                .personality(userEntity.getPersonalityEntity().getPersonalityName())
                .smoke(userEntity.getSmoking())
                .state(userEntity.getLocationEntity().getLocationName())
                .warning(userEntity.getWarning())
                .weight(userEntity.getWeightEntity().getWeightName())
                .wantAge(matchingFilterEntity.getAge())
                .wantGender(matchingFilterEntity.getGenderEntity().getGender())
                .wantHeight(matchingFilterEntity.getHeight())
                .wantOccupation(matchingFilterEntity.getOccupationEntity().getOccupationName())
                .connectAt(authEntity.getConnectedAt())
                .wantSmoke(matchingFilterEntity.getSmoking()).build();
    }

    @Transactional
    public UserDTO getUser(String token)
    {
        UserEntity userEntity = userRepository.findByAuthEntity(authRepository.findByKakaoId(Long.valueOf(jwtProvider.validate(token))).orElse(null)).orElse(null);

        if (userEntity == null)
        {
            return null;
        }

        var userId = userEntity.getUserId();
        var entity1 = matchingHistoryRepository.findByReqUserEntityUserIdAndReqResult(userId, "standby");

        if(entity1.isPresent())
        {
            var user1 = userRepository.findByUserId(entity1.get().getResUserEntity().getUserId()).get();

            System.out.println("user1 Entity : " + user1);

            return UserDTO.builder()
                    .name(user1.getName())
                    .gender(user1.getGenderEntity().getGender())
                    .age(user1.getAge())
                    .kakaoId(user1.getKakaoId())
                    .nickname(user1.getNickname())
                    .height(user1.getHeightEntity().getHeight())
                    .face(user1.getFaceShapeEntity().getFaceShapeName())
                    .frequency(user1.getSnsFrequencyEntity().getSnsFrequencyLevel())
                    .intro(user1.getProfile())
                    .major(user1.getMajorEntity().getMajorName())
                    .mbti(user1.getMbtiEntity().getMbtiName())
                    .occupation(user1.getOccupationEntity().getOccupationName())
                    .personality(user1.getPersonalityEntity().getPersonalityName())
                    .smoke(user1.getSmoking())
                    .state(user1.getLocationEntity().getLocationName())
                    .weight(user1.getWeightEntity().getWeightName())
                    .matchingState(user1.getMatchingState())
                    .connectAt(user1.getAuthEntity().getConnectedAt())
                    .warning(user1.getWarning()).build();
        }
        else
        {
            var entity2 = matchingHistoryRepository.findByResUserEntityUserIdAndResResult(userId, "standby");

            System.out.println("entity2 : " + entity2);

            if (entity2.isPresent())
            {
                var user2 = userRepository.findByUserId(entity2.get().getReqUserEntity().getUserId()).get();

                return UserDTO.builder()
                        .name(user2.getName())
                        .gender(user2.getGenderEntity().getGender())
                        .age(user2.getAge())
                        .kakaoId(user2.getKakaoId())
                        .nickname(user2.getNickname())
                        .height(user2.getHeightEntity().getHeight())
                        .face(user2.getFaceShapeEntity().getFaceShapeName())
                        .frequency(user2.getSnsFrequencyEntity().getSnsFrequencyLevel())
                        .intro(user2.getProfile())
                        .major(user2.getMajorEntity().getMajorName())
                        .mbti(user2.getMbtiEntity().getMbtiName())
                        .occupation(user2.getOccupationEntity().getOccupationName())
                        .personality(user2.getPersonalityEntity().getPersonalityName())
                        .smoke(user2.getSmoking())
                        .state(user2.getLocationEntity().getLocationName())
                        .weight(user2.getWeightEntity().getWeightName())
                        .warning(user2.getWarning())
                        .connectAt(user2.getAuthEntity().getConnectedAt())
                        .matchingState(user2.getMatchingState()).build();
            }
            else
            {
                return UserDTO.builder()
                        .matchingState(userEntity.getMatchingState()).build();
            }
        }
    }

    @Transactional
    public List<UserDTO> getHistory(String token)
    {
        String kakaoId = jwtProvider.validate(token);
        AuthEntity authEntity = authRepository.findByKakaoId(Long.valueOf(kakaoId)).orElse(null);
        UserEntity userEntity = userRepository.findByAuthEntity(authEntity).orElse(null);

        if (userEntity == null)
        {
            System.out.println("userEntity 가 null입니다");
            return Collections.emptyList();
        }

        Long userId = userEntity.getUserId();

        /**
         * 1차로 Request 컬럼에서 찾고 2차로 Response 컬럼에서 find
         */

        List<Long> userList = new ArrayList<>();
        List<String> purposeList = new ArrayList<>();

        List<MatchingHistoryEntity> reqUserList = matchingHistoryRepository.findByReqUserEntityUserId(userId).orElse(null);

        if (reqUserList == null)
        {
            System.out.println("req 컬럼에 사용자의 history가 없습니다");
            System.out.println("res 컬럼에서 탐색 진행");
        }
        else
        {
            System.out.println("req에서 사용자의 ID에 해당하는 history가 존재하면 resUserId 값을 userList에 담는다");
            for (MatchingHistoryEntity entity : reqUserList)
            {
                userList.add(entity.getResUserEntity().getUserId());
                purposeList.add(entity.getPurpose());
            }
        }

        List<MatchingHistoryEntity> resUserList = matchingHistoryRepository.findByResUserEntityUserId(userId).orElse(null);

        if (resUserList == null)
        {
            System.out.println("res 컬럼에 사용자의 history가 없습니다");
        }
        else
        {
            System.out.println("res에서 사용자ID의 history가 존재하면 reqUserId값을 userList에 담는다");
            for (MatchingHistoryEntity entity : resUserList)
            {
                userList.add(entity.getReqUserEntity().getUserId());
                purposeList.add(entity.getPurpose());
            }
        }

        if (userList.isEmpty())
        {
            System.out.println("사용자의 history가 없음");
            return Collections.emptyList();
        }

        List<UserDTO> historyList = new ArrayList<>();

        for (int i=0; i<userList.size(); i++)
        {
            UserEntity historyUserEntity = userRepository.findByUserId(userList.get(i)).orElse(null);

            if (historyUserEntity == null)
            {
                continue;
            }
            UserDTO userDTO = UserDTO.builder()
                    .name(historyUserEntity.getName())
                    .gender(historyUserEntity.getGenderEntity().getGender())
                    .age(historyUserEntity.getAge())
                    .kakaoId(historyUserEntity.getKakaoId())
                    .nickname(historyUserEntity.getNickname())
                    .height(historyUserEntity.getHeightEntity().getHeight())
                    .face(historyUserEntity.getFaceShapeEntity().getFaceShapeName())
                    .frequency(historyUserEntity.getSnsFrequencyEntity().getSnsFrequencyLevel())
                    .intro(historyUserEntity.getProfile())
                    .major(historyUserEntity.getMajorEntity().getMajorName())
                    .mbti(historyUserEntity.getMbtiEntity().getMbtiName())
                    .occupation(historyUserEntity.getOccupationEntity().getOccupationName())
                    .personality(historyUserEntity.getPersonalityEntity().getPersonalityName())
                    .smoke(historyUserEntity.getSmoking())
                    .state(historyUserEntity.getLocationEntity().getLocationName())
                    .weight(historyUserEntity.getWeightEntity().getWeightName())
                    .warning(historyUserEntity.getWarning())
                    .connectAt(historyUserEntity.getAuthEntity().getConnectedAt())
                    .matchingState(purposeList.get(i)).build();

            historyList.add(userDTO);
        }

        System.out.println("나와 매칭된 상대방의 정보 리스트");
        System.out.println("historyList : " + historyList);

        return historyList;
    }

    @Transactional
    public boolean matchingResult(String token, Boolean result)
    {
        UserEntity userEntity = userRepository.findByAuthEntity(authRepository.findByKakaoId(Long.valueOf(jwtProvider.validate(token))).orElse(null)).orElse(null);

        if (userEntity == null)
        {
            System.out.println("userEntity를 찾을수 없음");
            return false;
        }

        Long userId = userEntity.getUserId();

        var reqMatchingEntity = matchingHistoryRepository.findByReqUserEntityUserIdAndReqResult(userId, "standby").orElse(null);

        if (reqMatchingEntity == null)
        {
            var resMatchingEntity = matchingHistoryRepository.findByResUserEntityUserIdAndResResult(userId, "standby").orElse(null);
            if (resMatchingEntity == null)
            {
                System.out.println("history에서 찾기 실패");
                return false;
            }
            else
            {
                if (result == false)
                {
                    resMatchingEntity.setPurpose("reject");
                    return true;
                }
                else
                {
                    resMatchingEntity.setPurpose("accept");
                    return true;
                }
            }
        }
        else
        {
            if (result == false)
            {
                reqMatchingEntity.setPurpose("reject");
                return true;
            }
            else
            {
                reqMatchingEntity.setPurpose("accept");
                return true;
            }
        }
    }
}
