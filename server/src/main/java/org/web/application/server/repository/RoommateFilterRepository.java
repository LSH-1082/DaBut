package org.web.application.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.web.application.server.entity.RoommateFilterEntity;
import org.web.application.server.entity.UserEntity;

import java.util.Optional;

@Repository
public interface RoommateFilterRepository extends JpaRepository<RoommateFilterEntity, Long> {

    Optional<RoommateFilterEntity> findByUserEntity(UserEntity userEntity);

}
