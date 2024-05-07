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
@Table(name = "room_age")
public class RoomAgeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer roomAgeId;

    private String roomAgeName;

    @OneToMany(mappedBy = "roomAgeEntity", cascade = CascadeType.PERSIST)
    @Builder.Default
    @ToString.Exclude
    private List<RoommateFilterEntity> roommateFilterEntity = new ArrayList<>();
}