package org.web.application.server.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
@Builder
public class EditFriendDTO {
    private String wantAge;
    private String wantGender;
    private int wantHeight;
    private String wantOccupation;
    private boolean wantSmoke;
}
