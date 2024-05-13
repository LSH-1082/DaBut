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

    public void editRoommate(EditRoommateDTO editRoommateDTO, String token) {
        String kakaoId = jwtProvider.validate(token);

        System.out.println("kakaoId : " + kakaoId);

        var authEntity = authRepository.findByKakaoId(Long.valueOf(kakaoId)).orElse(null);

        System.out.println("authEntity : " + authEntity);

        var userEntity = userRepository.findByAuthEntity(authEntity).orElse(null);

        System.out.println("userEntity : " + userEntity);

        if (roommateFilterRepository.findByUserEntity(userEntity).isPresent()) {
            var roommateFilterEntity = roommateFilterRepository.findByUserEntity(userEntity).get();
            roommateFilterEntity.setCleaningEntity(cleaningRepository.findByCleaningName(editRoommateDTO.getRoomClean()).orElse(null));
            roommateFilterEntity.setLivePatternEntity(livePatternRepository.findByLivePatternName(editRoommateDTO.getRoomPattern()).orElse(null));
            roommateFilterEntity.setRoomAgeEntity(roomAgeRepository.findByRoomAgeName(editRoommateDTO.getRoomWantAge()).orElse(null));
            roommateFilterEntity.setRoomLocationEntity(roomLocationRepository.findByRoomLocationName(editRoommateDTO.getRoomWantUniv()).orElse(null));
            roommateFilterEntity.setIntro(editRoommateDTO.getRoomIntro());
            roommateFilterRepository.save(roommateFilterEntity);
        }
        else {
            RoommateFilterEntity roommateFilterEntity = RoommateFilterEntity.builder()
                    .userEntity(userEntity)
                    .cleaningEntity(cleaningRepository.findByCleaningName(editRoommateDTO.getRoomClean()).orElse(null))
                    .livePatternEntity(livePatternRepository.findByLivePatternName(editRoommateDTO.getRoomPattern()).orElse(null))
                    .roomAgeEntity(roomAgeRepository.findByRoomAgeName(editRoommateDTO.getRoomWantAge()).orElse(null))
                    .roomLocationEntity(roomLocationRepository.findByRoomLocationName(editRoommateDTO.getRoomWantUniv()).orElse(null))
                    .Intro(editRoommateDTO.getRoomIntro())
                    .build();
            roommateFilterRepository.save(roommateFilterEntity);
        }
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

        var roommateEntity = roommateFilterRepository.findByUserEntity(userEntity);

        System.out.println("roommateEntity = " + roommateEntity);

        if (roommateEntity.isPresent()) {

            var roommate = roommateEntity.get();

            RoommateDTO roommateDTO = RoommateDTO.builder()
                    .roomClean(roommate.getCleaningEntity().getCleaningName())
                    .roomPattern(roommate.getLivePatternEntity().getLivePatternName())
                    .roomWantAge(roommate.getRoomAgeEntity().getRoomAgeName())
                    .roomWantUniv(roommate.getRoomLocationEntity().getRoomLocationName())
                    .roomIntro(roommate.getIntro())
                    .build();

            return roommateDTO;
        } else {
            return null;
        }
    }
}
