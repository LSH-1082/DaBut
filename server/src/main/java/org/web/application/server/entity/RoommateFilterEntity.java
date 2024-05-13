package org.web.application.server.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Table(name = "roommate_filter")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RoommateFilterEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long roommateFilterId;

    private String Intro;

    //청소 주기
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "cleaning_id")
    private CleaningEntity cleaningEntity;
    //생활 패턴
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "live_pattern_id")
    private LivePatternEntity livePatternEntity;
    //룸메 나이
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "room_age_id")
    private RoomAgeEntity roomAgeEntity;
    //룸메 지역(학교)
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "room_location_id")
    private RoomLocationEntity roomLocationEntity;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private UserEntity userEntity;
}
