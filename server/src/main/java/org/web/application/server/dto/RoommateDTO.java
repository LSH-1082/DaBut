package org.web.application.server.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
@Builder
public class RoommateDTO {
    private String roomClean;
    private String roomPattern;
    private String roomWantAge;
    private String roomWantUniv;
    private String roomIntro;
}
