package com.example.api_user.security;

public class JwtTokenProvider {
    @Value("{iwt.secret}")
    private String secretKey;

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }
}
