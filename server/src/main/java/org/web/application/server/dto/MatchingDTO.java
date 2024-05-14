package org.web.application.server.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MatchingDTO {
    private Long userId;
    private Integer age;
    private String faceShape;
    private String mbti;
    private String personality;
    private Integer snsFrequency;
    private String major;
}
