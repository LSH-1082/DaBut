package org.web.application.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.web.application.server.entity.AuthEntity;
import org.web.application.server.entity.UserEntity;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {

    Optional<UserEntity> findByAuthEntity(AuthEntity authEntity);

    Optional<List<UserEntity>> findByMatchingStateAndGenderEntityGenderAndSmokingAndLocationEntityLocationNameAndAgeBetweenAndUserIdNot(
            String matchingState,
            String gender,
            Boolean smoking,
            String locationName,
            int minAge,
            int maxAge,
            Long userId);

    Optional<UserEntity> findByUserId(Long userId);

    Optional<List<UserEntity>> findByRoommateFilterEntityRoomLocationEntityRoomLocationNameAndRoommateFilterEntityCleaningEntityCleaningNameAndGenderEntityGenderAndSmokingAndRoommateFilterEntityLivePatternEntityLivePatternNameAndAgeBetweenAndUserIdNot(
            String location,
            String cleaning,
            String gender,
            Boolean smoking,
            String livePattern,
            int minAge,
            int maxAge,
            Long id
    );

}
