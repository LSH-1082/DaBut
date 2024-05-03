package org.web.application.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.web.application.server.entity.PersonalityEntity;

import java.util.Optional;

public interface PersonalityRepository extends JpaRepository<PersonalityEntity, Long> {
    Optional<PersonalityEntity> findByPersonalityName(String personality);
}
