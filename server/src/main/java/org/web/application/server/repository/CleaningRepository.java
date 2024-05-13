package org.web.application.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.web.application.server.entity.CleaningEntity;

import java.util.Optional;

@Repository
public interface CleaningRepository extends JpaRepository<CleaningEntity, Long> {
    Optional<CleaningEntity> findByCleaningId(Integer cleaningId);
}
