package com.nyayasetu.backend.service;

import com.nyayasetu.backend.model.LegalQuery;
import com.nyayasetu.backend.repository.LegalQueryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class LegalQueryService {

    @Autowired
    private LegalQueryRepository repository;

    public LegalQuery saveQuery(LegalQuery query) {
        query.setTimestamp(LocalDateTime.now());
        return repository.save(query);
    }

    public List<LegalQuery> getQueriesByUser(String userId) {
        return repository.findByUserIdOrderByTimestampDesc(userId);
    }

    public List<LegalQuery> getQueriesBySession(String sessionId) {
        return repository.findBySessionIdOrderByTimestampDesc(sessionId);
    }

    public List<LegalQuery> getQueriesByCategory(String category) {
        return repository.findByCategoryOrderByTimestampDesc(category);
    }

    public List<LegalQuery> getRecentQueries(int limit) {
        return repository.findRecentQueries(PageRequest.of(0, limit));
    }

    public List<Object[]> getTrendingCategories(int limit) {
        return repository.findTrendingCategories(PageRequest.of(0, limit));
    }
}
