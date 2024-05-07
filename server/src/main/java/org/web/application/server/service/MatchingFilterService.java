package org.web.application.server.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.web.application.server.dto.UserDTO;
import org.web.application.server.entity.*;
import org.web.application.server.repository.*;

@Service
@RequiredArgsConstructor
public class MatchingFilterService {

    private final JwtProvider jwtProvider;
    private final MatchingFilterRepository matchingFilterRepository;
    private final GenderRepository genderRepository;
    private final OccupationRepository occupationRepository;
    private final UserRepository userRepository;

    public void saveUser(UserDTO userDTO, String token) {
        //UserDTO를 MatchingFilterEntity에 저장
        MatchingFilterEntity matchingFilterEntity = toUserEntity(userDTO, token);
        //matchingFilterEntity를 데이터베이스에 저장
        matchingFilterRepository.save(matchingFilterEntity);
    }


    private MatchingFilterEntity toUserEntity(UserDTO userDTO, String token) {
        //TODO 토큰 파싱하는 함수 추가해서 아이디 받기
        String userId = jwtProvider.validate(token);

        MatchingFilterEntity matchingFilterEntity = new MatchingFilterEntity();
        matchingFilterEntity.setAge(userDTO.getWantAge());
        matchingFilterEntity.setHeight(userDTO.getWantHeight());
        matchingFilterEntity.setSmoking(userDTO.isWantSmoke());

        var wantgenderEntity = genderRepository.findByGender(userDTO.getWantGender());
        wantgenderEntity.ifPresent(matchingFilterEntity::setGenderEntity);

        var wantoccupationEntity = occupationRepository.findByOccupationName(userDTO.getWantOccupation());
        wantoccupationEntity.ifPresent(matchingFilterEntity::setOccupationEntity);

        // var userEntity = userRepository.findById(userId);
        //matchingFilterEntity.setUserEntity(userEntity);

        return matchingFilterEntity;

    }
}
