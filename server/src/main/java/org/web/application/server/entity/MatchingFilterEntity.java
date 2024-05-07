package org.web.application.server.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Table(name = "matching_filter")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MatchingFilterEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long matchingFilterId;

    private String age;

    private Integer height;

    private Boolean smoking;

    //referencedColumnName????
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private UserEntity userEntity;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "gender_id")
    private GenderEntity genderEntity;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "occupation_id")
    private OccupationEntity occupationEntity;
}
