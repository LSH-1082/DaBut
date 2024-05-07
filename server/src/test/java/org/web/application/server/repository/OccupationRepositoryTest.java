package org.web.application.server.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class OccupationRepositoryTest {

    @Autowired
    OccupationRepository occupationRepository;

    @Test
    void findByOccupationNameTest() {
        System.out.println(occupationRepository.findByOccupationName("none"));
    }

}