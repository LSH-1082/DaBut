package org.web.application.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.web.application.server.entity.MatchingHistoryEntity;

import java.util.List;
import java.util.Optional;

@Repository
public interface MatchingHistoryRepository extends JpaRepository<MatchingHistoryEntity, Long> {

    Optional<MatchingHistoryEntity> findByReqUserEntityUserIdAndReqResult(Long userId, String result);

    Optional<MatchingHistoryEntity> findByResUserEntityUserIdAndResResult(Long userId, String result);

    Optional<List<MatchingHistoryEntity>> findByReqUserEntityUserId(Long reqUserId);

    Optional<List<MatchingHistoryEntity>> findByResUserEntityUserId(Long resUserId);

}
