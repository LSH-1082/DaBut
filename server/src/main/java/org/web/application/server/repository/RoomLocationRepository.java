package org.web.application.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.web.application.server.entity.RoomLocationEntity;

import java.util.Optional;

@Repository
public interface RoomLocationRepository extends JpaRepository<RoomLocationEntity, Long> {
    Optional<RoomLocationEntity> findByRoomLocationId(Integer roomLocationId);
}
