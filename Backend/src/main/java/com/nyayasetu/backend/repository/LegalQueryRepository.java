package com.nyayasetu.backend.repository;

import com.nyayasetu.backend.model.LegalQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.domain.Pageable;

import java.util.List;

@Repository
public interface LegalQueryRepository extends JpaRepository<LegalQuery, Long> {
    List<LegalQuery> findByUserIdOrderByTimestampDesc(String userId);
    List<LegalQuery> findBySessionIdOrderByTimestampDesc(String sessionId);
    List<LegalQuery> findByCategoryOrderByTimestampDesc(String category);
    
    @Query("SELECT q FROM LegalQuery q ORDER BY q.timestamp DESC")
    List<LegalQuery> findRecentQueries(Pageable pageable);

    @Query("SELECT q.category, COUNT(q) as count FROM LegalQuery q GROUP BY q.category ORDER BY count DESC")
    List<Object[]> findTrendingCategories(Pageable pageable);
}
