package org.web.application.server.service;

import lombok.Builder;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.web.application.server.repository.TestRepository;

import java.util.List;

@RequiredArgsConstructor
@Service
@Builder
public class TestService {

    private final TestRepository testRepository;

    public List<?> getAll()
    {
        return testRepository.findAll();
    }
}
