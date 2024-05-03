package org.web.application.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.web.application.server.entity.MatchingFilterEntity;

import java.util.List;

public interface MatchingFilterRepository extends JpaRepository<MatchingFilterEntity, Long> {

}
