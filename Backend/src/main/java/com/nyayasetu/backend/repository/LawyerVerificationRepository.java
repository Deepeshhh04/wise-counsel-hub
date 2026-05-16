package com.nyayasetu.backend.repository;

import com.nyayasetu.backend.model.LawyerVerification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LawyerVerificationRepository extends JpaRepository<LawyerVerification, Long> {
    Optional<LawyerVerification> findByUserId(String userId);
    List<LawyerVerification> findByStatus(LawyerVerification.VerificationStatus status);
    List<LawyerVerification> findBySpecializationAndStatus(String specialization, LawyerVerification.VerificationStatus status);
    List<LawyerVerification> findByStateAndStatus(String state, LawyerVerification.VerificationStatus status);
    List<LawyerVerification> findByCityAndStatus(String city, LawyerVerification.VerificationStatus status);
}
