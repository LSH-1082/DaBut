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
import java.util.Arrays;
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


    /**
     * 240521 임재현
     * 1. 먼저 req,res 컬럼에서 나의 마지막 기록을 찾음
     * 2. 둘다 entity를 받아오고 idx값이 가장 큰 entity가 마지막 기록임
     */
    @Transactional
    public UserDTO getUser(String token)
    {

        UserEntity userEntity = userRepository.findByAuthEntity(authRepository.findByKakaoId(Long.valueOf(jwtProvider.validate(token))).orElse(null)).orElse(null);

        if (userEntity == null)
        {
            return null;
        }

        List<String> results = Arrays.asList("standby", "accept");

        Long userId = userEntity.getUserId();
        System.out.println("@@userId : " + userId);


        // req와 res 둘다 내 기록이 있는 경우
        // req에만 있는 경우
        // res에만 있는 경우
        // 둘다 없는 경우
        var reqUserEntity = matchingHistoryRepository.findTopByReqUserEntityUserIdAndReqResultInOrderByMatchingHistoryIdDesc(userId,results).orElse(null);
        var resUserEntity = matchingHistoryRepository.findTopByResUserEntityUserIdAndResResultInOrderByMatchingHistoryIdDesc(userId,results).orElse(null);

        if (reqUserEntity == null && resUserEntity == null)
        {
            System.out.println("기록이 없음");
            return UserDTO.builder()
                    .matchingState(userEntity.getMatchingState()).build();
        }
        //req에만 기록이 있을 때
        else if (reqUserEntity != null && resUserEntity == null)
        {
            System.out.println("req에만 기록이 있음");
            UserEntity matchedUserEntity = reqUserEntity.getResUserEntity();

            return UserDTO.builder()
                    .name(matchedUserEntity.getName())
                    .gender(matchedUserEntity.getGenderEntity().getGender())
                    .age(matchedUserEntity.getAge())
                    .kakaoId(matchedUserEntity.getKakaoId())
                    .nickname(matchedUserEntity.getNickname())
                    .height(matchedUserEntity.getHeightEntity().getHeight())
                    .face(matchedUserEntity.getFaceShapeEntity().getFaceShapeName())
                    .frequency(matchedUserEntity.getSnsFrequencyEntity().getSnsFrequencyLevel())
                    .intro(matchedUserEntity.getProfile())
                    .major(matchedUserEntity.getMajorEntity().getMajorName())
                    .mbti(matchedUserEntity.getMbtiEntity().getMbtiName())
                    .occupation(matchedUserEntity.getOccupationEntity().getOccupationName())
                    .personality(matchedUserEntity.getPersonalityEntity().getPersonalityName())
                    .smoke(matchedUserEntity.getSmoking())
                    .state(matchedUserEntity.getLocationEntity().getLocationName())
                    .weight(matchedUserEntity.getWeightEntity().getWeightName())
                    .matchingState(matchedUserEntity.getMatchingState())//상대방의 매칭 분야
                    .connectAt(matchedUserEntity.getAuthEntity().getConnectedAt())//상대방의 가입 날짜
                    .myResult(reqUserEntity.getReqResult())//내 수락 여부
                    .otherResult(reqUserEntity.getResResult())//상대방의 수락 여부
                    .purpose(reqUserEntity.getPurpose())
                    .warning(matchedUserEntity.getWarning()).build();
        }
        else if (reqUserEntity == null && resUserEntity !=null)
        {
            System.out.println("res에만 기록이 있음");
            UserEntity matchedUserEntity = resUserEntity.getReqUserEntity();

            return UserDTO.builder()
                    .name(matchedUserEntity.getName())
                    .gender(matchedUserEntity.getGenderEntity().getGender())
                    .age(matchedUserEntity.getAge())
                    .kakaoId(matchedUserEntity.getKakaoId())
                    .nickname(matchedUserEntity.getNickname())
                    .height(matchedUserEntity.getHeightEntity().getHeight())
                    .face(matchedUserEntity.getFaceShapeEntity().getFaceShapeName())
                    .frequency(matchedUserEntity.getSnsFrequencyEntity().getSnsFrequencyLevel())
                    .intro(matchedUserEntity.getProfile())
                    .major(matchedUserEntity.getMajorEntity().getMajorName())
                    .mbti(matchedUserEntity.getMbtiEntity().getMbtiName())
                    .occupation(matchedUserEntity.getOccupationEntity().getOccupationName())
                    .personality(matchedUserEntity.getPersonalityEntity().getPersonalityName())
                    .smoke(matchedUserEntity.getSmoking())
                    .state(matchedUserEntity.getLocationEntity().getLocationName())
                    .weight(matchedUserEntity.getWeightEntity().getWeightName())
                    .matchingState(matchedUserEntity.getMatchingState())//상대방의 매칭 분야
                    .connectAt(matchedUserEntity.getAuthEntity().getConnectedAt())//상대방의 가입 날짜
                    .myResult(resUserEntity.getResResult())//내 수락 여부
                    .otherResult(resUserEntity.getReqResult())//상대방의 수락 여부
                    .purpose(resUserEntity.getPurpose())
                    .warning(matchedUserEntity.getWarning()).build();
        }

        else if (reqUserEntity.getMatchingHistoryId() > resUserEntity.getMatchingHistoryId())
        {
            System.out.println("req컬럼이 나의 마지막 기록");
            UserEntity matchedUserEntity = reqUserEntity.getResUserEntity();

            return UserDTO.builder()
                    .name(matchedUserEntity.getName())
                    .gender(matchedUserEntity.getGenderEntity().getGender())
                    .age(matchedUserEntity.getAge())
                    .kakaoId(matchedUserEntity.getKakaoId())
                    .nickname(matchedUserEntity.getNickname())
                    .height(matchedUserEntity.getHeightEntity().getHeight())
                    .face(matchedUserEntity.getFaceShapeEntity().getFaceShapeName())
                    .frequency(matchedUserEntity.getSnsFrequencyEntity().getSnsFrequencyLevel())
                    .intro(matchedUserEntity.getProfile())
                    .major(matchedUserEntity.getMajorEntity().getMajorName())
                    .mbti(matchedUserEntity.getMbtiEntity().getMbtiName())
                    .occupation(matchedUserEntity.getOccupationEntity().getOccupationName())
                    .personality(matchedUserEntity.getPersonalityEntity().getPersonalityName())
                    .smoke(matchedUserEntity.getSmoking())
                    .state(matchedUserEntity.getLocationEntity().getLocationName())
                    .weight(matchedUserEntity.getWeightEntity().getWeightName())
                    .matchingState(matchedUserEntity.getMatchingState())//상대방의 매칭 분야
                    .connectAt(matchedUserEntity.getAuthEntity().getConnectedAt())//상대방의 가입 날짜
                    .myResult(reqUserEntity.getReqResult())//내 수락 여부
                    .otherResult(reqUserEntity.getResResult())//상대방의 수락 여부
                    .purpose(reqUserEntity.getPurpose())
                    .warning(matchedUserEntity.getWarning()).build();
        }

        else if (reqUserEntity.getMatchingHistoryId() < resUserEntity.getMatchingHistoryId())
        {
            System.out.println("res 컬럼이 마지막 기록");
            UserEntity matchedUserEntity = resUserEntity.getReqUserEntity();

            return UserDTO.builder()
                    .name(matchedUserEntity.getName())
                    .gender(matchedUserEntity.getGenderEntity().getGender())
                    .age(matchedUserEntity.getAge())
                    .kakaoId(matchedUserEntity.getKakaoId())
                    .nickname(matchedUserEntity.getNickname())
                    .height(matchedUserEntity.getHeightEntity().getHeight())
                    .face(matchedUserEntity.getFaceShapeEntity().getFaceShapeName())
                    .frequency(matchedUserEntity.getSnsFrequencyEntity().getSnsFrequencyLevel())
                    .intro(matchedUserEntity.getProfile())
                    .major(matchedUserEntity.getMajorEntity().getMajorName())
                    .mbti(matchedUserEntity.getMbtiEntity().getMbtiName())
                    .occupation(matchedUserEntity.getOccupationEntity().getOccupationName())
                    .personality(matchedUserEntity.getPersonalityEntity().getPersonalityName())
                    .smoke(matchedUserEntity.getSmoking())
                    .state(matchedUserEntity.getLocationEntity().getLocationName())
                    .weight(matchedUserEntity.getWeightEntity().getWeightName())
                    .matchingState(matchedUserEntity.getMatchingState())//상대방의 매칭 분야
                    .connectAt(matchedUserEntity.getAuthEntity().getConnectedAt())//상대방의 가입 날짜
                    .myResult(resUserEntity.getResResult())//내 수락 여부
                    .otherResult(resUserEntity.getReqResult())//상대방의 수락 여부
                    .purpose(resUserEntity.getPurpose())
                    .warning(matchedUserEntity.getWarning()).build();
        }
        else
        {
            System.out.println("에러");
            return null;
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
        List<String> myResult = new ArrayList<>();
        List<String> otherResult = new ArrayList<>();

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
                myResult.add(entity.getReqResult());
                otherResult.add(entity.getResResult());

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
                myResult.add(entity.getResResult());
                otherResult.add(entity.getReqResult());
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
                    .myResult(myResult.get(i))
                    .otherResult(otherResult.get(i))
                    .matchingState(purposeList.get(i)).build();

            historyList.add(userDTO);
        }

        System.out.println("나와 매칭된 상대방의 정보 리스트");
        System.out.println("historyList : " + historyList);

        return historyList;
    }

    /**
     * 240521 임재현
     * 수락/거절 버튼 상호작용
     */
    @Transactional
    public String matchingResult(String token, String result)
    {
        UserEntity userEntity = userRepository.findByAuthEntity(authRepository.findByKakaoId(Long.valueOf(jwtProvider.validate(token))).orElse(null)).orElse(null);

        if (userEntity == null)
        {
            System.out.println("userEntity를 찾을수 없음");
            return "userEntity null";
        }

        Long userId = userEntity.getUserId();

        List<String> results = Arrays.asList("standby", "accept");

        var reqUserEntity = matchingHistoryRepository.findTopByReqUserEntityUserIdAndReqResultInOrderByMatchingHistoryIdDesc(userId,results).orElse(null);
        var resUserEntity = matchingHistoryRepository.findTopByResUserEntityUserIdAndResResultInOrderByMatchingHistoryIdDesc(userId,results).orElse(null);

        if (reqUserEntity == null && resUserEntity == null)
        {
            System.out.println("기록이 없음");
            return "no history";
        }
        //req에만 기록이 있을 때
        else if (reqUserEntity != null && resUserEntity == null)
        {
            System.out.println("req에만 기록이 있음");
            reqUserEntity.setReqResult(result);

        }
        else if (reqUserEntity == null)
        {
            System.out.println("res에만 기록이 있음");
            resUserEntity.setResResult(result);
        }

        else if (reqUserEntity.getMatchingHistoryId() > resUserEntity.getMatchingHistoryId())
        {
            System.out.println("req컬럼이 나의 마지막 기록");
            reqUserEntity.setReqResult(result);
        }

        else if (reqUserEntity.getMatchingHistoryId() < resUserEntity.getMatchingHistoryId())
        {
            System.out.println("res 컬럼이 마지막 기록");
            resUserEntity.setResResult(result);
        }
        return "none";
    }

    public UserDTO checkAccept(String token)
    {
        UserEntity userEntity = userRepository.findByAuthEntity(authRepository.findByKakaoId(Long.valueOf(jwtProvider.validate(token))).orElse(null)).orElse(null);

        if (userEntity == null)
        {
            System.out.println("userEntity를 찾을수 없음");
            return null;
        }

        List<String> results = Arrays.asList("standby", "accept");

        var userId = userEntity.getUserId();

        var reqUserEntity = matchingHistoryRepository.findTopByReqUserEntityUserIdAndReqResultInOrderByMatchingHistoryIdDesc(userId,results).orElse(null);
        var resUserEntity = matchingHistoryRepository.findTopByResUserEntityUserIdAndResResultInOrderByMatchingHistoryIdDesc(userId,results).orElse(null);

        if (reqUserEntity == null && resUserEntity == null)
        {
            System.out.println("기록이 없음");
            return null;
        }
        //req에만 기록이 있을 때
        else if (reqUserEntity != null && resUserEntity == null)
        {
            System.out.println("req에만 기록이 있음");

            String myResult = reqUserEntity.getReqResult();
            String otherResult = reqUserEntity.getResResult();

            if (myResult.equals("accept") && otherResult.equals("accept"))
            {
                return UserDTO.builder()
                        .otherResult(otherResult)
                        .myResult(myResult)
                        .kakaoId(userRepository.findByUserId(reqUserEntity.getResUserEntity().getUserId()).get().getKakaoId()).build();
            }
            else
            {
                return UserDTO.builder()
                        .otherResult(otherResult)
                        .myResult(myResult).build();
            }
        }
        else if (reqUserEntity == null)
        {
            System.out.println("res에만 기록이 있음");
            String myResult = resUserEntity.getResResult();
            String otherResult = resUserEntity.getReqResult();

            if (myResult.equals("accept") && otherResult.equals("accept"))
            {
                return UserDTO.builder()
                        .otherResult(otherResult)
                        .myResult(myResult)
                        .kakaoId(userRepository.findByUserId(resUserEntity.getReqUserEntity().getUserId()).get().getKakaoId()).build();
            }
            else
            {
                return UserDTO.builder()
                        .otherResult(otherResult)
                        .myResult(myResult).build();
            }
        }

        else if (reqUserEntity.getMatchingHistoryId() > resUserEntity.getMatchingHistoryId())
        {
            System.out.println("req컬럼이 나의 마지막 기록");
            String myResult = reqUserEntity.getReqResult();
            String otherResult = reqUserEntity.getResResult();

            if (myResult.equals("accept") && otherResult.equals("accept"))
            {
                return UserDTO.builder()
                        .otherResult(otherResult)
                        .myResult(myResult)
                        .kakaoId(userRepository.findByUserId(reqUserEntity.getResUserEntity().getUserId()).get().getKakaoId()).build();
            }
            else
            {
                return UserDTO.builder()
                        .otherResult(otherResult)
                        .myResult(myResult).build();
            }
        }

        else if (reqUserEntity.getMatchingHistoryId() < resUserEntity.getMatchingHistoryId())
        {
            System.out.println("res 컬럼이 마지막 기록");
            String myResult = resUserEntity.getResResult();
            String otherResult = resUserEntity.getReqResult();

            if (myResult.equals("accept") && otherResult.equals("accept"))
            {
                return UserDTO.builder()
                        .otherResult(otherResult)
                        .myResult(myResult)
                        .kakaoId(userRepository.findByUserId(resUserEntity.getReqUserEntity().getUserId()).get().getKakaoId()).build();
            }
            else
            {
                return UserDTO.builder()
                        .otherResult(otherResult)
                        .myResult(myResult).build();
            }
        }

        return null;
    }
}
