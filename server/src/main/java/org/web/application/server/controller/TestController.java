package org.web.application.server.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.web.application.server.dto.TestDto;
import org.web.application.server.service.TestService;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class TestController {

    private final TestService testService;

    @PostMapping("/test")
    public void test(@RequestBody TestDto dto) {
        System.out.println(dto);
    }
}
