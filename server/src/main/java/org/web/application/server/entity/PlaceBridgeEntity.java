package org.web.application.server.entity;

import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "hobby_bridge")
public class PlaceBridgeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long hobbyBridgeId;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id")
    private UserEntity userEntity;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "prefer_place_id")
    private PreferPlaceEntity preferPlaceEntity;
}
