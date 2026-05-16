package com.nyayasetu.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "lawyer_verifications")
public class LawyerVerification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String userId; // Or lawyerId

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, unique = true)
    private String barCouncilId;

    private String specialization;

    private String experience;

    private String state;

    private String city;

    private String profilePhotoUrl;

    @Column(nullable = false)
    private String documentUrl;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private VerificationStatus status = VerificationStatus.PENDING;

    private LocalDateTime submittedAt = LocalDateTime.now();

    private LocalDateTime reviewedAt;

    public enum VerificationStatus {
        PENDING, APPROVED, REJECTED
    }
}
