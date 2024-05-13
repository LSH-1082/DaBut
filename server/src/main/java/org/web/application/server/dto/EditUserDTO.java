package org.web.application.server.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
@Builder
public class EditUserDTO {
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
    private String weight;
}
