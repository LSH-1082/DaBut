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
@Table(name = "live_pattern")
public class LivePatternEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer livePatternId;

    private String livePatternName;

    @OneToMany(mappedBy = "livePatternEntity", cascade = CascadeType.PERSIST)
    @Builder.Default
    @ToString.Exclude
    private List<RoommateFilterEntity> roommateFilterEntity = new ArrayList<>();
}