package org.web.application.server.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RoommateMatchingDTO {
    private Long userId;
    private String cleaning;
    private String livePattern;
    private Integer roomAge;
    private String roomLocation;

}
