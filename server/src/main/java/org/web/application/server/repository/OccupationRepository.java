package org.web.application.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.web.application.server.entity.OccupationEntity;

import java.util.Optional;

@Repository
public interface OccupationRepository extends JpaRepository<OccupationEntity, Long> {
    Optional<OccupationEntity> findByOccupationName(String occupation);
}
