package org.web.application.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.web.application.server.entity.SnsFrequencyEntity;

import java.util.Optional;

@Repository
public interface SnsFrequencyRepository extends JpaRepository<SnsFrequencyEntity, Long> {
    Optional<SnsFrequencyEntity> findBySnsFrequencyLevel(Integer snsFrequency);
}
