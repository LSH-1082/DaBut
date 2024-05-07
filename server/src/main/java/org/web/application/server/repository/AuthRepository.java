package org.web.application.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.web.application.server.entity.AuthEntity;

@Repository
public interface AuthRepository extends JpaRepository<AuthEntity, Long> {
}
