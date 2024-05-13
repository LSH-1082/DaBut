package org.web.application.server.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
@Builder
public class EditRoommateDTO {
    private String cleaing;
    private String livepattern;
    private String roomage;
    private String roomlocation;
}
