package org.web.application.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.web.application.server.entity.LocationEntity;

import java.util.Optional;

@Repository
public interface LocationRepository extends JpaRepository<LocationEntity, Long> {
    Optional<LocationEntity> findByLocationName(String preferlocation);
}
