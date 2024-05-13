package org.web.application.server.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MatchingDTO {
    private Long userId;
    private String userName;
    private String kakaoId;
}
