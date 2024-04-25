package org.web.application.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.web.application.server.entity.TestEntity;

public interface TestRepository extends JpaRepository<TestEntity, Long> {

}
