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
@Table(name = "personality")
public class PersonalityEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long personalityId;

    private String personalityName;

    @OneToMany(mappedBy = "personalityEntity", cascade = CascadeType.PERSIST)
    @Builder.Default
    @ToString.Exclude
    private List<UserEntity> userEntity = new ArrayList<>();
}
