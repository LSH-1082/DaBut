package org.web.application.server.dto;

import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
@Builder
public class UserDTO {
    private String name;
    private String gender;
    private int age;
    private String kakaoId;
    private String nickname;
    private int height;
    private String face;
    private int frequency;
    private String intro;
    private String major;
    private String mbti;
    private String occupation;
    private String personality;
    private boolean smoke;
    private String state;
    private String wantAge;
    private String wantGender;
    private int wantHeight;
    private String wantOccupation;
    private boolean wantSmoke;
    private String weight;
    private String matchingState;
    private int warning;
    //가입 날짜
    private String connectAt;
    //나의 수락 여부
    private String myResult;
    //상대방의 수락 여부
    private String otherResult;
}
