package org.web.application.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.web.application.server.entity.RoomAgeEntity;

import java.util.Optional;

@Repository
public interface RoomAgeRepository extends JpaRepository<RoomAgeEntity, Long> {
    Optional<RoomAgeEntity> findByRoomAgeName(String roomAgeName);
}
