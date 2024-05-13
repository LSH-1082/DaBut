package org.web.application.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.web.application.server.entity.LivePatternEntity;

import java.util.Optional;

@Repository
public interface LivePatternRepository extends JpaRepository<LivePatternEntity, Long> {
    Optional<LivePatternEntity> findByLivePatternName(String livePatternName);
}
