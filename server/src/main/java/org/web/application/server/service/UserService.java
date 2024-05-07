package org.web.application.server.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.web.application.server.dto.UserDTO;
import org.web.application.server.entity.*;
import org.web.application.server.repository.*;

import java.io.IOException;
import java.util.NoSuchElementException;
import java.util.Optional;

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
    private final LocationRepository LocationRepository;
    private final PreferPlaceRepository preferPlaceRepository;

    public void saveUser(UserDTO userDTO) {
        //UserDTO를 UserEntity로 변환
        UserEntity userEntity = toUserEntity(userDTO);
        System.out.println("Saving user: " + userEntity);
        //UserRepository에 UserEntity로 저장
        userRepository.save(userEntity);
    }

    public UserEntity toUserEntity(UserDTO userDTO) {
        UserEntity userEntity = new UserEntity();
        userEntity.setName(userDTO.getName());

        var genderEntity = genderRepository.findByGender(userDTO.getGender());
        genderEntity.ifPresent(userEntity::setGenderEntity);

        userEntity.setAge(userDTO.getAge());
        userEntity.setProfile(userDTO.getIntro());
        userEntity.setKakaoId(userDTO.getKakaoId());
        userEntity.setNickname(userDTO.getNickname());
        userEntity.setSmoking(userDTO.isSmoke());

        var heightEntity = heightRepository.findByHeight(userDTO.getHeight());
        heightEntity.ifPresent(userEntity::setHeightEntity);

        var occupationEntity = occupationRepository.findByOccupationName(userDTO.getOccupation());
        occupationEntity.ifPresent(userEntity::setOccupationEntity);

        var majorEntity = majorRepository.findByMajorName(userDTO.getMajor());
        majorEntity.ifPresent(userEntity::setMajorEntity);

        var weightEntity = weightRepository.findByWeightName(userDTO.getWeight());
        weightEntity.ifPresent(userEntity::setWeightEntity);

        var mbtiEntity = mbtiRepository.findByMbtiName(userDTO.getMbti());
        mbtiEntity.ifPresent(userEntity::setMbtiEntity);

        var snsFrequencyEntity = snsFrequencyRepository.findBySnsFrequencyLevel(userDTO.getFrequency());
        snsFrequencyEntity.ifPresent(userEntity::setSnsFrequencyEntity);

        var personalityEntity = personalityRepository.findByPersonalityName(userDTO.getPersonality());
        personalityEntity.ifPresent(userEntity::setPersonalityEntity);

        var faceShapeEntity = faceShapeRepository.findByFaceShapeName(userDTO.getFace());
        faceShapeEntity.ifPresent(userEntity::setFaceShapeEntity);

        var preferLocationEntity = LocationRepository.findByLocationName(userDTO.getState());
        preferLocationEntity.ifPresent(userEntity::setLocationEntity);

//        var preferPlaceEntity = preferPlaceRepository.findByPreferPlaceName(userDTO.getPreferplace());
//        preferPlaceEntity.ifPresent(userEntity::setPreferPlaceEntity);
        return userEntity;
    }
}
