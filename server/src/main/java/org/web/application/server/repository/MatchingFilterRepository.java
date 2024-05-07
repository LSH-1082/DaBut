package org.web.application.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.web.application.server.entity.MatchingFilterEntity;

import java.util.List;

@Repository
public interface MatchingFilterRepository extends JpaRepository<MatchingFilterEntity, Long> {

}
