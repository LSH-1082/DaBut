package org.web.application.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.web.application.server.entity.AuthEntity;
import org.web.application.server.entity.UserEntity;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {

//    @Query("SELECT u FROM UserEntity u JOIN u.authEntity a WHERE a.kakaoId = :kakaoId ")
//    @Query("SELECT u FROM UserEntity u WHERE u.authEntity.kakaoId = :kakaoId")
//    Optional<UserEntity> findByAuthEntity(AuthEntity auth);

    Optional<UserEntity> findByAuthEntity(AuthEntity authEntity);


}
