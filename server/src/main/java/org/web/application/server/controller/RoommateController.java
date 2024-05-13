package org.web.application.server.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.web.application.server.dto.EditRoommateDTO;
import org.web.application.server.dto.RoommateDTO;
import org.web.application.server.service.RoommateService;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/roommate")
@CrossOrigin(origins = "http://localhost:3000")
public class RoommateController {

    private final RoommateService roommateService;

    @PostMapping("/info")
    public ResponseEntity<?> saveRoommate(@RequestBody RoommateDTO roommateDTO, @RequestHeader(name = "Authorization") String token) {
        System.out.println("roommateDTO = " + roommateDTO + ", token = " + token);
        roommateService.saveRoommate(roommateDTO, token);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/edit")
    public ResponseEntity<?> editRoommate(@RequestBody EditRoommateDTO editRoommateDTO, @RequestHeader(name = "Authorization") String token) {
        System.out.println("editRoommateDTO = " + editRoommateDTO + ", token = " + token);
        roommateService.editRoommate(editRoommateDTO, token);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/edit/view")
    public RoommateDTO getRoommate(@RequestHeader(name = "Authorization") String token) {
        return  roommateService.getRoommate(token);
    }
}
