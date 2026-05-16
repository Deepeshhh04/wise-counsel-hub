package com.nyayasetu.backend.service;

import com.nyayasetu.backend.model.User;
import com.nyayasetu.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public User signup(User user) {
        if (repository.findByEmail(user.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }
        return repository.save(user);
    }

    public Optional<User> login(String email, String password) {
        return repository.findByEmail(email)
                .filter(u -> u.getPassword().equals(password));
    }
}
