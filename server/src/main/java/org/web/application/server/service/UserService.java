package org.web.application.server.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.web.application.server.dto.EditFriendDTO;
import org.web.application.server.dto.EditUserDTO;
import org.web.application.server.dto.MyPageDTO;
import org.web.application.server.dto.UserDTO;
import org.web.application.server.entity.*;
import org.web.application.server.jwt.JwtProvider;
import org.web.application.server.repository.*;

@Service
@RequiredArgsConstructor
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

    public void saveUser(UserDTO userDTO, String token) {
        //UserDTO를 UserEntity로 변환
        UserEntity userEntity = toUserEntity(userDTO, token);
        System.out.println("Saving user: " + userEntity);
        //UserRepository에 UserEntity로 저장
        userRepository.save(userEntity);
    }

    public UserEntity toUserEntity(UserDTO userDTO, String token) {

        var kakaoId = jwtProvider.validate(token);

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
                .authEntity(authRepository.findByKakaoId(Long.valueOf(kakaoId)).get())
                .build();

        jwtProvider.validate(token);

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

        //240513
        MyPageDTO myPageDTO = MyPageDTO.builder()
                .mbti(userEntity.getMbtiEntity().getMbtiName())
                .name(userEntity.getName())
                .gender(userEntity.getGenderEntity().getGender())
                .connectedAt(authEntity.getConnectedAt())
                .age(userEntity.getAge())
                .kakaoId(userEntity.getKakaoId())
                .location(userEntity.getLocationEntity().getLocationName()).build();

        return myPageDTO;
    }


    public void editUser(EditUserDTO editUserDTO, String token) {

        String kakaoId = jwtProvider.validate(token);

        System.out.println("kakaoId : " + kakaoId);

        var authEntity = authRepository.findByKakaoId(Long.valueOf(kakaoId)).orElse(null);

        System.out.println("authEntity : " + authEntity);

        var userEntity = userRepository.findByAuthEntity(authEntity).orElse(null);

        System.out.println("userEntity : " + userEntity);

        userEntity = UserEntity.builder()
                .name("수정")
                .genderEntity(genderRepository.findByGender(editUserDTO.getGender()).orElse(null))
                .age(editUserDTO.getAge())
                .kakaoId(editUserDTO.getKakaoId())
                .nickname(editUserDTO.getNickname())
                .heightEntity(heightRepository.findByHeight(editUserDTO.getHeight()).orElse(null))
                .faceShapeEntity(faceShapeRepository.findByFaceShapeName(editUserDTO.getFace()).orElse(null))
                .snsFrequencyEntity(snsFrequencyRepository.findBySnsFrequencyLevel(editUserDTO.getFrequency()).orElse(null))
                .profile(editUserDTO.getIntro())
                .majorEntity(majorRepository.findByMajorName(editUserDTO.getMajor()).orElse(null))
                .mbtiEntity(mbtiRepository.findByMbtiName(editUserDTO.getMbti()).orElse(null))
                .occupationEntity(occupationRepository.findByOccupationName(editUserDTO.getOccupation()).orElse(null))
                .personalityEntity(personalityRepository.findByPersonalityName(editUserDTO.getPersonality()).orElse(null))
                .smoking(editUserDTO.isSmoke())
                .locationEntity(locationRepository.findByLocationName(editUserDTO.getState()).orElse(null))
                .weightEntity(weightRepository.findByWeightName(editUserDTO.getWeight()).orElse(null))
                .build();

        userRepository.save(userEntity);
    }

    public void editFriend(EditFriendDTO editFriendDTO, String token) {

        String kakaoId = jwtProvider.validate(token);

        System.out.println("kakaoId : " + kakaoId);

        var authEntity = authRepository.findByKakaoId(Long.valueOf(kakaoId)).orElse(null);

        System.out.println("authEntity : " + authEntity);

        var userEntity = userRepository.findByAuthEntity(authEntity).orElse(null);

        System.out.println("userEntity : " + userEntity);

        userEntity = UserEntity.builder()
                .age(Integer.valueOf(editFriendDTO.getWantAge()))
                .genderEntity(genderRepository.findByGender(editFriendDTO.getWantGender()).orElse(null))
                .heightEntity(heightRepository.findByHeight(editFriendDTO.getWantHeight()).orElse(null))
                .occupationEntity(occupationRepository.findByOccupationName(editFriendDTO.getWantOccupation()).orElse(null))
                .smoking(editFriendDTO.isWantSmoke()).build();

        userRepository.save(userEntity);
    }

    public UserDTO getUser(String token) {
        System.out.println("=========getUser()==============");
        System.out.println("token = " + token);

        String kakaoId = jwtProvider.validate(token);

        System.out.println("kakaoId : " + kakaoId);

        var authEntity = authRepository.findByKakaoId(Long.valueOf(kakaoId)).orElse(null);

        System.out.println("authEntity : " + authEntity);

        var userEntity = userRepository.findByAuthEntity(authEntity).orElse(null);

        System.out.println("userEntity : " + userEntity);

        UserDTO userDTO = UserDTO.builder()
                .name(userEntity.getName())
                .age(userEntity.getAge())
                .intro(userEntity.getProfile())
                .kakaoId(userEntity.getKakaoId())
                .smoke(userEntity.getSmoking())
                .nickname(userEntity.getNickname())
                .gender(userEntity.getGenderEntity().getGender())
                .occupation(userEntity.getOccupationEntity().getOccupationName())
                .major(userEntity.getMajorEntity().getMajorName())
                .weight(userEntity.getWeightEntity().getWeightName())
                .height(userEntity.getHeightEntity().getHeight())
                .mbti(userEntity.getMbtiEntity().getMbtiName())
                .frequency(userEntity.getSnsFrequencyEntity().getSnsFrequencyLevel())
                .personality(userEntity.getPersonalityEntity().getPersonalityName())
                .face(userEntity.getFaceShapeEntity().getFaceShapeName())
                .state(userEntity.getLocationEntity().getLocationName()).build();

        return userDTO;

    }

    public UserDTO getFriend(String token) {
        System.out.println("=========getFriend()==============");
        System.out.println("token = " + token);

        String kakaoId = jwtProvider.validate(token);

        System.out.println("kakaoId : " + kakaoId);

        var authEntity = authRepository.findByKakaoId(Long.valueOf(kakaoId)).orElse(null);

        System.out.println("authEntity : " + authEntity);

        var userEntity = userRepository.findByAuthEntity(authEntity).orElse(null);

        System.out.println("userEntity : " + userEntity);

        var matchingFilterEntity = matchingFilterRepository.findByUserEntity(userEntity).orElse(null);

        UserDTO userDTO = UserDTO.builder()
                .wantAge(matchingFilterEntity.getAge())
                .wantHeight(matchingFilterEntity.getHeight())
                .wantSmoke(matchingFilterEntity.getSmoking())
                .wantGender(matchingFilterEntity.getGenderEntity().getGender())
                .wantOccupation(matchingFilterEntity.getOccupationEntity().getOccupationName())
                .build();

        return userDTO;
    }
}
