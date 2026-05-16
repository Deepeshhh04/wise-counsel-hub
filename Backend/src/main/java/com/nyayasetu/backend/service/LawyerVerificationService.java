package com.nyayasetu.backend.service;

import com.nyayasetu.backend.model.LawyerVerification;
import com.nyayasetu.backend.repository.LawyerVerificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class LawyerVerificationService {

    @Autowired
    private LawyerVerificationRepository repository;

    public LawyerVerification submitVerification(LawyerVerification verification) {
        verification.setStatus(LawyerVerification.VerificationStatus.PENDING);
        verification.setSubmittedAt(LocalDateTime.now());
        return repository.save(verification);
    }

    public Optional<LawyerVerification> getVerificationByUserId(String userId) {
        return repository.findByUserId(userId);
    }

    public List<LawyerVerification> getAllVerifications() {
        return repository.findAll();
    }

    public List<LawyerVerification> getPendingVerifications() {
        return repository.findByStatus(LawyerVerification.VerificationStatus.PENDING);
    }

    public List<LawyerVerification> getApprovedVerifications() {
        return repository.findByStatus(LawyerVerification.VerificationStatus.APPROVED);
    }

    public List<LawyerVerification> getApprovedBySpecialization(String specialization) {
        return repository.findBySpecializationAndStatus(specialization, LawyerVerification.VerificationStatus.APPROVED);
    }

    public List<LawyerVerification> getApprovedByState(String state) {
        return repository.findByStateAndStatus(state, LawyerVerification.VerificationStatus.APPROVED);
    }

    public List<LawyerVerification> getApprovedByCity(String city) {
        return repository.findByCityAndStatus(city, LawyerVerification.VerificationStatus.APPROVED);
    }

    public LawyerVerification updateVerificationStatus(Long id, LawyerVerification.VerificationStatus status) {
        return repository.findById(id).map(verification -> {
            verification.setStatus(status);
            verification.setReviewedAt(LocalDateTime.now());
            return repository.save(verification);
        }).orElseThrow(() -> new RuntimeException("Verification not found with id " + id));
    }
}
