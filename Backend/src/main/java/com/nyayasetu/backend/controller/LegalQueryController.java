package com.nyayasetu.backend.controller;

import com.nyayasetu.backend.model.LegalQuery;
import com.nyayasetu.backend.service.LegalQueryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/queries")
@CrossOrigin(origins = "*") // In production, replace with specific origins
public class LegalQueryController {

    @Autowired
    private LegalQueryService service;

    @PostMapping("/save")
    public ResponseEntity<LegalQuery> saveQuery(@RequestBody LegalQuery query) {
        return ResponseEntity.ok(service.saveQuery(query));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<LegalQuery>> getQueriesByUser(@PathVariable String userId) {
        return ResponseEntity.ok(service.getQueriesByUser(userId));
    }

    @GetMapping("/session/{sessionId}")
    public ResponseEntity<List<LegalQuery>> getQueriesBySession(@PathVariable String sessionId) {
        return ResponseEntity.ok(service.getQueriesBySession(sessionId));
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<LegalQuery>> getQueriesByCategory(@PathVariable String category) {
        return ResponseEntity.ok(service.getQueriesByCategory(category));
    }

    @GetMapping("/recent")
    public ResponseEntity<List<LegalQuery>> getRecentQueries(@RequestParam(defaultValue = "10") int limit) {
        return ResponseEntity.ok(service.getRecentQueries(limit));
    }

    @GetMapping("/trending")
    public ResponseEntity<List<Object[]>> getTrendingCategories(@RequestParam(defaultValue = "5") int limit) {
        return ResponseEntity.ok(service.getTrendingCategories(limit));
    }
}
