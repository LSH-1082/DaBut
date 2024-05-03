package org.web.application.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.web.application.server.entity.PreferLocationEntity;
import org.web.application.server.entity.PreferPlaceEntity;

import java.util.Optional;

@Repository
public interface PreferLocationRepository extends JpaRepository<PreferLocationEntity, Long> {
    Optional<PreferLocationEntity> findBypreferLocationName(String preferlocation);
}
