package org.web.application.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.web.application.server.entity.MatchingHistoryEntity;

@Repository
public interface MatchingHistoryRepository extends JpaRepository<MatchingHistoryEntity, Long> {

}
