package org.web.application.server.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.web.application.server.service.TestService;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class TestController {

    private final TestService testService;

    @GetMapping("/test")
    public List<?> getAll()
    {
        return testService.getAll();
    }
}
