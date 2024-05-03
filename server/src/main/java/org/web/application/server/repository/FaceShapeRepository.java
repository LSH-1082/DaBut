package org.web.application.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.web.application.server.entity.FaceShapeEntity;

import java.util.Optional;

@Repository
public interface FaceShapeRepository extends JpaRepository<FaceShapeEntity, Long> {
    Optional<FaceShapeEntity> findByFaceShapeName(String faceShape);
}
