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
@Table(name = "face_shape")
public class FaceShapeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long faceShapeId;

    private String faceShapeName;

    @OneToMany(mappedBy = "faceShapeEntity", cascade = CascadeType.PERSIST)
    @Builder.Default
    @ToString.Exclude
    private List<UserEntity> userEntity = new ArrayList<>();
}
