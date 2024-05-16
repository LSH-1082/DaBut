package org.web.application.server.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@Table(name = "matching_history")
public class MatchingHistoryEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long matchingHistoryId;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "req_user_id")
    private UserEntity reqUserEntity;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "res_user_id")
    private UserEntity resUserEntity;

    //매칭 분야 정보
    private String purpose;

    //요청자 매칭 상태 정보
    //대기상태 : standby
    //수락상태 : accept
    //거절상태 : reject
    //수락 이후 거절 당한 상태 : deny
    @Builder.Default
    private String reqResult = "standby";

    //응답자 매칭 상태 정보
    @Builder.Default
    private String resResult = "standby";

    //요청자 신고 정보 (요청자가 응답자를 신고했을 경우 true)
    @Builder.Default
    private Boolean reqReport = false;

    //응답자 신고 정보
    @Builder.Default
    private Boolean resReport = false;
}
