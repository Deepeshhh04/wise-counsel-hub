package com.nyayasetu.backend.controller;

import com.nyayasetu.backend.model.LawyerVerification;
import com.nyayasetu.backend.service.LawyerVerificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/lawyer-verification")
@CrossOrigin(origins = "*") // In production, replace with specific origins
public class LawyerVerificationController {

    @Autowired
    private LawyerVerificationService service;

    @PostMapping("/submit")
    public ResponseEntity<LawyerVerification> submitVerification(@RequestBody LawyerVerification verification) {
        return ResponseEntity.ok(service.submitVerification(verification));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<LawyerVerification> getVerification(@PathVariable String userId) {
        return service.getVerificationByUserId(userId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/all")
    public ResponseEntity<List<LawyerVerification>> getAllVerifications() {
        return ResponseEntity.ok(service.getAllVerifications());
    }

    @GetMapping("/pending")
    public ResponseEntity<List<LawyerVerification>> getPendingVerifications() {
        return ResponseEntity.ok(service.getPendingVerifications());
    }

    @GetMapping("/approved")
    public ResponseEntity<List<LawyerVerification>> getApprovedVerifications() {
        return ResponseEntity.ok(service.getApprovedVerifications());
    }

    @GetMapping("/approved/specialization/{specialization}")
    public ResponseEntity<List<LawyerVerification>> getApprovedBySpecialization(@PathVariable String specialization) {
        return ResponseEntity.ok(service.getApprovedBySpecialization(specialization));
    }

    @GetMapping("/approved/state/{state}")
    public ResponseEntity<List<LawyerVerification>> getApprovedByState(@PathVariable String state) {
        return ResponseEntity.ok(service.getApprovedByState(state));
    }

    @GetMapping("/approved/city/{city}")
    public ResponseEntity<List<LawyerVerification>> getApprovedByCity(@PathVariable String city) {
        return ResponseEntity.ok(service.getApprovedByCity(city));
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<LawyerVerification> updateStatus(
            @PathVariable Long id,
            @RequestParam LawyerVerification.VerificationStatus status) {
        try {
            return ResponseEntity.ok(service.updateVerificationStatus(id, status));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
