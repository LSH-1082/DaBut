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
@Table(name = "users")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    private String name;
    private Integer age;
    //평점
    private Integer score;
    //프로필
    private String profile;
    //룸메 프로필
    private String roomProfile;
    //카카오 아이디
    private String kakaoId;
    //흡연여부
    private Boolean smoking;
    //닉네임
    private String nickname;
    /*******************************ManyToOne******************************************/
    //성별
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "gender_id")
    private GenderEntity genderEntity;
    //직업
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "occupation_id")
    private OccupationEntity occupationEntity;
    //전공분야
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "major_id")
    private MajorEntity majorEntity;
    //체형
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "weight_id")
    private WeightEntity weightEntity;
    //키
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "height_id")
    private HeightEntity heightEntity;
    //mbti
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "mbti_id")
    private MbtiEntity mbtiEntity;
    //sns사용 빈도
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "sns_id")
    private SnsFrequencyEntity snsFrequencyEntity;
    //성격
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "personality_id")
    private PersonalityEntity personalityEntity;
    //얼굴형
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "face_shape_id")
    private FaceShapeEntity faceShapeEntity;
    //선호 지역
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "prefer_location")
    private PreferLocationEntity preferLocationEntity;
    //선호 장소
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "prefer_place")
    private PreferPlaceEntity preferPlaceEntity;

    /*******************************@OneToMany******************************************/

    //취미,관심사 브릿지
    @OneToMany(mappedBy = "userEntity", cascade = CascadeType.PERSIST)
    @Builder.Default
    @ToString.Exclude
    private List<HobbyBridgeEntity> hobbyBridgeEntity = new ArrayList<>();

    /*******************************@OneToOne******************************************/

    //찾고싶은 친구 유형 필터
    @OneToOne(mappedBy = "userEntity")
    private MatchingFilterEntity matchingFilterEntity;

}
