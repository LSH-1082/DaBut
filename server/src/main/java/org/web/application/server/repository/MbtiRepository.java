package org.web.application.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.web.application.server.entity.MbtiEntity;

import java.util.Optional;

public interface MbtiRepository extends JpaRepository<MbtiEntity, Long> {
    Optional<MbtiEntity> findByMbtiName(String mbti);
}
