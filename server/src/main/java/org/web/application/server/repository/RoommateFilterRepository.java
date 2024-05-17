package org.web.application.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.web.application.server.entity.RoommateFilterEntity;
import org.web.application.server.entity.UserEntity;

import java.util.List;
import java.util.Optional;

@Repository
public interface RoommateFilterRepository extends JpaRepository<RoommateFilterEntity, Long> {

    Optional<RoommateFilterEntity> findByUserEntity(UserEntity userEntity);

    Optional<List<RoommateFilterEntity>> findByRoomLocationEntityRoomLocationNameAndCleaningEntityCleaningNameAndUserEntityGenderEntityGenderAndUserEntitySmokingAndLivePatternEntityLivePatternNameAndAgeBetween(
            String location,
            String cleaning,
            String gender,
            Boolean smoking,
            String livePattern,
            int minAge,
            int maxAge
    );
}
