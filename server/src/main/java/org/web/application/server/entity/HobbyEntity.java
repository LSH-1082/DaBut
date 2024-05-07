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
@Table(name = "hobby")
public class HobbyEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer hobbyId;

    private String hobbyName;

    @OneToMany(mappedBy = "hobbyEntity", cascade = CascadeType.PERSIST)
    @Builder.Default
    @ToString.Exclude
    private List<HobbyBridgeEntity> hobbyBridgeEntity = new ArrayList<>();
}
