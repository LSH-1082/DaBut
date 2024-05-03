package org.web.application.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.web.application.server.entity.GenderEntity;

import java.util.List;
import java.util.Optional;

@Repository
public interface GenderRepository extends JpaRepository<GenderEntity, Long> {

    Optional<GenderEntity> findByGender(String gender);
}
