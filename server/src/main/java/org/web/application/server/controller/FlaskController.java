package org.web.application.server.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.web.application.server.service.FlaskService;

@RestController
@RequestMapping("/flask")
@RequiredArgsConstructor
public class FlaskController {
    private final FlaskService flaskService;

    @PostMapping("/matching")
    public String sendToFlask(@RequestHeader(name = "Authorization") String token, @RequestBody String purpose) throws JsonProcessingException
    {
        System.out.println("FlaskController.sendToFlask");
        System.out.println(flaskService.sendToFlask(token, purpose));
        return "dummy data limjaehyeon";
    }
}
