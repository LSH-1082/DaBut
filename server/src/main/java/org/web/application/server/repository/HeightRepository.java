package org.web.application.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.web.application.server.entity.HeightEntity;

import java.util.Optional;

@Repository
public interface HeightRepository extends JpaRepository<HeightEntity, Long> {

    Optional<HeightEntity> findByHeight(Integer height);
}
