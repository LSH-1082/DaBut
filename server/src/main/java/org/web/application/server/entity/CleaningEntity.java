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
@Table(name = "cleaning")
public class CleaningEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer cleaningId;

    private String cleaningName;

    @OneToMany(mappedBy = "cleaningEntity", cascade = CascadeType.PERSIST)
    @Builder.Default
    @ToString.Exclude
    private List<RoommateFilterEntity> roommateFilterEntity = new ArrayList<>();
}
