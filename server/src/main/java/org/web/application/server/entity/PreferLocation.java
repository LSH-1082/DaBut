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
@Table(name = "prefer_location")
public class PreferLocation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long preferLocationId;

    private String preferLocationName;

    @OneToMany(mappedBy = "preferLocationEntity", cascade = CascadeType.PERSIST)
    @Builder.Default
    @ToString.Exclude
    private List<UserEntity> userEntity = new ArrayList<>();
}
