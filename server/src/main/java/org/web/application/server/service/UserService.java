package org.web.application.server.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
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
    private final PreferPlaceRepository preferPlaceRepository;
    private final MatchingFilterRepository matchingFilterRepository;
    private final LocationRepository locationRepository;
    private final JwtProvider jwtProvider;

    public void saveUser(UserDTO userDTO) {
        //UserDTO를 UserEntity로 변환
        UserEntity userEntity = toUserEntity(userDTO);
        System.out.println("Saving user: " + userEntity);
        //UserRepository에 UserEntity로 저장
        userRepository.save(userEntity);
    }

    public UserEntity toUserEntity(UserDTO userDTO) {
//        UserEntity userEntity = new UserEntity();
//
//        userEntity.setName(userDTO.getName());
//
//        var genderEntity = genderRepository.findByGender(userDTO.getGender());
//        genderEntity.ifPresent(userEntity::setGenderEntity);
//
//        userEntity.setAge(userDTO.getAge());
//        userEntity.setProfile(userDTO.getIntro());
//        userEntity.setKakaoId(userDTO.getKakaoId());
//        userEntity.setNickname(userDTO.getNickname());
//        userEntity.setSmoking(userDTO.isSmoke());
//
//        var heightEntity = heightRepository.findByHeight(userDTO.getHeight());
//        heightEntity.ifPresent(userEntity::setHeightEntity);
//
//        var occupationEntity = occupationRepository.findByOccupationName(userDTO.getOccupation());
//        occupationEntity.ifPresent(userEntity::setOccupationEntity);
//
//        var majorEntity = majorRepository.findByMajorName(userDTO.getMajor());
//        majorEntity.ifPresent(userEntity::setMajorEntity);
//
//        var weightEntity = weightRepository.findByWeightName(userDTO.getWeight());
//        weightEntity.ifPresent(userEntity::setWeightEntity);
//
//        var mbtiEntity = mbtiRepository.findByMbtiName(userDTO.getMbti());
//        mbtiEntity.ifPresent(userEntity::setMbtiEntity);
//
//        var snsFrequencyEntity = snsFrequencyRepository.findBySnsFrequencyLevel(userDTO.getFrequency());
//        snsFrequencyEntity.ifPresent(userEntity::setSnsFrequencyEntity);
//
//        var personalityEntity = personalityRepository.findByPersonalityName(userDTO.getPersonality());
//        personalityEntity.ifPresent(userEntity::setPersonalityEntity);
//
//        var faceShapeEntity = faceShapeRepository.findByFaceShapeName(userDTO.getFace());
//        faceShapeEntity.ifPresent(userEntity::setFaceShapeEntity);
//
//        var preferLocationEntity = LocationRepository.findByLocationName(userDTO.getState());
//        preferLocationEntity.ifPresent(userEntity::setLocationEntity);

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
                .build();

        //jwtProvider.validate(token);

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

        // UserEntity와의 관계를 설정
        userEntity.addMatchingFilter(matchingFilterEntity, userEntity);

        return userEntity;
    }
}
