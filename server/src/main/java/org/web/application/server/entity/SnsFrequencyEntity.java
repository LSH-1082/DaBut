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
@Table(name = "sns_frequency")
public class SnsFrequencyEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer snsFrequencyId;

    private Integer snsFrequencyLevel;

    private String snsFrequencyDescription;

    @OneToMany(mappedBy = "snsFrequencyEntity", cascade = CascadeType.PERSIST)
    @Builder.Default
    @ToString.Exclude
    private List<UserEntity> userEntity = new ArrayList<>();
}
