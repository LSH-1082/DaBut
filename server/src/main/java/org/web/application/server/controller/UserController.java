package org.web.application.server.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.web.application.server.dto.EditFriendDTO;
import org.web.application.server.dto.EditUserDTO;
import org.web.application.server.dto.MyPageDTO;
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
    public ResponseEntity<?> saveUser(@RequestBody UserDTO userDTO, @RequestHeader(name = "Authorization") String token) {
        System.out.println("userDTO = " + userDTO);
        System.out.println("token = " + token);
        userService.saveUser(userDTO, token);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/mypage")
    public MyPageDTO getMypage(@RequestHeader(name = "Authorization") String token)
    {
        return userService.getMypage(token);
    }

    @PostMapping("/edit/info")
    public ResponseEntity<?> editUser(@RequestBody EditUserDTO editUserDTO, @RequestHeader(name = "Authorization") String token) {
        System.out.println("editUserDTO = " + editUserDTO);
        userService.editUser(editUserDTO, token);
        return ResponseEntity.ok().build();
    }


    @PostMapping("/edit/friend")
    public ResponseEntity<?> editFriend(@RequestBody EditFriendDTO editFriendDTO, @RequestHeader(name = "Authorization") String token) {
        System.out.println("editFriendDTO = " + editFriendDTO);
        userService.editFriend(editFriendDTO, token);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/all")
    public UserDTO getAll(@RequestHeader(name = "Authorization") String token) {
        return userService.getAll(token);
    }

    @GetMapping("/meta")
    public UserDTO getUser(@RequestHeader(name = "Authorization") String token)
    {
        return userService.getUser(token);
    }
}
