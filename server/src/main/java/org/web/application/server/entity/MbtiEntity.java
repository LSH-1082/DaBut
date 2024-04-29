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
@Table(name = "mbti")
public class MbtiEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer mbtiId;

    private String mbtiName;

    @OneToMany(mappedBy = "mbtiEntity", cascade = CascadeType.PERSIST)
    @Builder.Default
    @ToString.Exclude
    private List<UserEntity> userEntity = new ArrayList<>();
}
