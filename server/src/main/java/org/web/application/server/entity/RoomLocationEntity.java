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
@Table(name = "room_location")
public class RoomLocationEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer roomLocationId;

    private String roomLocationName;

    @OneToMany(mappedBy = "roomLocationEntity", cascade = CascadeType.PERSIST)
    @Builder.Default
    @ToString.Exclude
    private List<RoommateFilterEntity> roommateFilterEntity = new ArrayList<>();
}