package org.web.application.server.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.web.application.server.dto.EditRoommateDTO;
import org.web.application.server.dto.RoommateDTO;
import org.web.application.server.entity.RoommateFilterEntity;
import org.web.application.server.jwt.JwtProvider;
import org.web.application.server.repository.*;

@Service
@RequiredArgsConstructor
public class RoommateService {

    private final RoommateFilterRepository roommateFilterRepository;
    private final CleaningRepository cleaningRepository;
    private final LivePatternRepository livePatternRepository;
    private final RoomAgeRepository roomAgeRepository;
    private final RoomLocationRepository roomLocationRepository;
    private final AuthRepository authRepository;
    private final UserRepository userRepository;
    private final JwtProvider jwtProvider;

    public void saveRoommate(RoommateDTO roommateDTO, String token) {
        RoommateFilterEntity roommateFilterEntity = toRoommateFilterEntity(roommateDTO, token);
        System.out.println("roommateFilterEntity = " + roommateFilterEntity);
        roommateFilterRepository.save(roommateFilterEntity);
    }

    private RoommateFilterEntity toRoommateFilterEntity(RoommateDTO roommateDTO, String token) {

        String kakaoId = jwtProvider.validate(token);

        System.out.println("kakaoId : " + kakaoId);

        var authEntity = authRepository.findByKakaoId(Long.valueOf(kakaoId)).orElse(null);

        System.out.println("authEntity : " + authEntity);

        var userEntity = userRepository.findByAuthEntity(authEntity).orElse(null);

        System.out.println("userEntity : " + userEntity);

        RoommateFilterEntity roommateFilterEntity = RoommateFilterEntity.builder()
                .userEntity(userEntity)
                .cleaningEntity(cleaningRepository.findByCleaningId(Integer.valueOf(roommateDTO.getRoomClean())).orElse(null))
                .livePatternEntity(livePatternRepository.findByLivePatternId(Integer.valueOf(roommateDTO.getRoomPattern())).orElse(null))
                .roomAgeEntity(roomAgeRepository.findByRoomAgeId(Integer.valueOf(roommateDTO.getRoomWantAge())).orElse(null))
                .roomLocationEntity(roomLocationRepository.findByRoomLocationId(Integer.valueOf(roommateDTO.getRoomWantUniv())).orElse(null))
                .Intro(roommateDTO.getRoomIntro()).build();

        roommateFilterRepository.save(roommateFilterEntity);

        return roommateFilterEntity;

    }

    public void editRoommate(EditRoommateDTO editRoommateDTO, String token) {
        String kakaoId = jwtProvider.validate(token);

        System.out.println("kakaoId : " + kakaoId);

        var authEntity = authRepository.findByKakaoId(Long.valueOf(kakaoId)).orElse(null);

        System.out.println("authEntity : " + authEntity);

        var userEntity = userRepository.findByAuthEntity(authEntity).orElse(null);

        System.out.println("userEntity : " + userEntity);

        RoommateFilterEntity roommateFilterEntity = RoommateFilterEntity.builder()
                .cleaningEntity(cleaningRepository.findByCleaningId(Integer.valueOf(editRoommateDTO.getCleaing())).orElse(null))
                .livePatternEntity(livePatternRepository.findByLivePatternId(Integer.valueOf(editRoommateDTO.getLivepattern())).orElse(null))
                .roomAgeEntity(roomAgeRepository.findByRoomAgeId(Integer.valueOf(editRoommateDTO.getRoomage())).orElse(null))
                .roomLocationEntity(roomLocationRepository.findByRoomLocationId(Integer.valueOf(editRoommateDTO.getRoomlocation())).orElse(null)).build();

        roommateFilterRepository.save(roommateFilterEntity);

    }

    @Transactional
    public RoommateDTO getRoommate(String token) {
        System.out.println("=========getRoommate()==============");
        System.out.println("token = " + token);

        String kakaoId = jwtProvider.validate(token);

        System.out.println("kakaoId : " + kakaoId);

        var authEntity = authRepository.findByKakaoId(Long.valueOf(kakaoId)).orElse(null);

        System.out.println("authEntity : " + authEntity);

        var userEntity = userRepository.findByAuthEntity(authEntity).orElse(null);

        System.out.println("userEntity : " + userEntity);

        var roommateEntity = roommateFilterRepository.findByUserEntity(userEntity).orElse(null);

        System.out.println("roommateEntity = " + roommateEntity);

        RoommateDTO roommateDTO = RoommateDTO.builder()
                .roomClean(roommateEntity.getCleaningEntity().getCleaningName())
                .roomPattern(roommateEntity.getLivePatternEntity().getLivePatternName())
                .roomWantAge(roommateEntity.getRoomAgeEntity().getRoomAgeName())
                .roomWantUniv(roommateEntity.getRoomLocationEntity().getRoomLocationName())
                .roomIntro(roommateEntity.getIntro())
                .build();

        return roommateDTO;
    }
}
