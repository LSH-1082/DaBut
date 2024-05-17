package org.web.application.server.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MatchingHistoryDTO {

    private Long matchingHistoryId;

    private String purpose;

    private Boolean reqReport;

    private String reqResult;

    private Boolean resReport;

    private String resResult;

    private Long reqUserId;

    private Long resUserId;
}
