package org.web.application.server.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.web.application.server.dto.UserDTO;
import org.web.application.server.service.UserService;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    
    private final UserService userService;


    @PostMapping("/info")
    public ResponseEntity<?> saveUser(@RequestBody UserDTO userDTO) {
        System.out.println("userDTO = " + userDTO);
        userService.saveUser(userDTO);
        return ResponseEntity.ok().build();
    }

}
