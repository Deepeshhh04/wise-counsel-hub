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
@Table(name = "legal_queries")
public class LegalQuery {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String userId;

    private String sessionId;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String queryText;

    private String category;

    @Column(nullable = false)
    private LocalDateTime timestamp = LocalDateTime.now();
}
