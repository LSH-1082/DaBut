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

    //매칭 결과 상태
    @Builder.Default
    private String result = "standby";

    @Builder.Default
    private Boolean reqReport = false;

    @Builder.Default
    private Boolean resReport = false;
}
