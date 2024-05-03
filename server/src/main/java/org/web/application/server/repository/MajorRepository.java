package org.web.application.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.web.application.server.entity.MajorEntity;

import java.util.Optional;

@Repository
public interface MajorRepository extends JpaRepository<MajorEntity, Long> {
    Optional<MajorEntity> findByMajorName(String major);
}
