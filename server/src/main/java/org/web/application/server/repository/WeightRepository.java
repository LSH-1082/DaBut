package org.web.application.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.web.application.server.entity.WeightEntity;

import java.util.Optional;

@Repository
public interface WeightRepository extends JpaRepository<WeightEntity, Long> {
    Optional<WeightEntity> findByWeightName(String weight);
}
