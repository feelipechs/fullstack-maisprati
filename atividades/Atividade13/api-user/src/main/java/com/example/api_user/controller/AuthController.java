package com.example.api_user.controller;

import ch.qos.logback.core.net.SMTPAppenderBase;
import com.example.api_user.dto.LoginDTO;
import com.example.api_user.security.CustomUserDetails;
import com.example.api_user.security.JwtTokenProvider;
import com.example.api_user.service.CustomUserDetailsService;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;
    private final CustomUserDetailsService userDetailsService;

    public AuthController(AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider, CustomUserDetailsService userDetailsService) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
        this.userDetailsService = userDetailsService;
    }

    @PostMapping("/login")
    public String Login(@RequestBody LoginDTO loginDTO){
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken( loginDTO.getUsername(), loginDTO.getPassword())
            );

            CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
            Long userId = userDetails.getId();

            return jwtTokenProvider.generateToken(userDetails, userId);
        } catch (AuthenticationException error) {
            throw new RuntimeException("Invalid Credentials");
        }
    }

    @GetMapping("/token/{id}")
    public String getTokenById(@PathVariable Long id) {
        UserDetails userDetails = userDetailsService.loadUserById(id);
        if (userDetails != null) {
            Long userId = ((CustomUserDetails) userDetails).getId();
            return jwtTokenProvider.generateToken(userDetails, userId);
        }
        throw new RuntimeException("User not found");
    }
}