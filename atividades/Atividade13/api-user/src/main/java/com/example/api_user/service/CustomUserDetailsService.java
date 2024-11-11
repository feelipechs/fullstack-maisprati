package com.example.api_user.service;

import com.example.api_user.model.User;
import com.example.api_user.repository.UserRepository;
import com.example.api_user.security.CustomUserDetails;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if(user == null) {
            throw new UsernameNotFoundException("Usuário não encontrado: " + username);
        }
        // return org.springframework.security.core.userdetails.User.withUsername(user.getUsername()).password(user.getPassword()).build();
        return new CustomUserDetails(user);
    }

    public UserDetails loadUserById(Long id) {
        Optional<User> userOptional = userRepository.findById(id);
        if (!userOptional.isPresent()) {
            throw new UsernameNotFoundException("Usuário não encontrado com ID: " + id);
        }
        return new CustomUserDetails(userOptional.get()); // Retorna uma instância de CustomUserDetails
    }
}