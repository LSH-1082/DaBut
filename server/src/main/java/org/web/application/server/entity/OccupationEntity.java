package org.web.application.server.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "occupation")
public class OccupationEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long occupationId;

    private String occupationName;

    @OneToMany(mappedBy = "occupationEntity", cascade = CascadeType.PERSIST)
    @Builder.Default
    @ToString.Exclude
    private List<UserEntity> userEntity = new ArrayList<>();

    @OneToMany(mappedBy = "occupationEntity", cascade = CascadeType.PERSIST)
    @Builder.Default
    @ToString.Exclude
    private List<MatchingFilterEntity> matchingFilterEntity = new ArrayList<>();
}
