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
@Table(name = "height")
public class HeightEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer heightId;

    private Integer height;

    @OneToMany(mappedBy = "heightEntity", cascade = CascadeType.PERSIST)
    @Builder.Default
    @ToString.Exclude
    private List<UserEntity> userEntity = new ArrayList<>();
}
