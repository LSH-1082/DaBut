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
@Table(name = "prefer_place")
public class PreferPlaceEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer preferPlaceId;

    private String preferPlaceName;

    @OneToMany(mappedBy = "preferPlaceEntity", cascade = CascadeType.PERSIST)
    @Builder.Default
    @ToString.Exclude
    private List<PlaceBridgeEntity> placeBridgeEntity = new ArrayList<>();
}
