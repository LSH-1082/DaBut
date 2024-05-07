package org.web.application.server.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.web.application.server.dto.UserDTO;
import org.web.application.server.service.MatchingFilterService;
import org.web.application.server.service.UserService;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    
    private final UserService userService;
    private final MatchingFilterService matchingFilterService;

//    @PostMapping("/info")
//    public String UserSave(@ModelAttribute UserDTO userDTO) {
//        System.out.println("userDTO = " + userDTO);
//        userService.save(UserDTO);
//        return "success";
//    }

    @PostMapping("/info")
    public ResponseEntity<?> saveUser(@RequestBody UserDTO userDTO, @RequestHeader String token) {
        System.out.println("userDTO = " + userDTO);
        userService.saveUser(userDTO, token);
        matchingFilterService.saveUser(userDTO, token);
        return ResponseEntity.ok().build();
    }

}
