package org.web.application.server.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "auth")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long authId;

    private String userEmail;

    private Long kakaoId;

    private String connectedAt;

    private String role;

    @OneToOne(mappedBy = "authEntity")
    private UserEntity userEntity;
}
