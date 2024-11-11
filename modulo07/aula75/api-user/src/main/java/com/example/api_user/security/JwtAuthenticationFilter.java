package com.example.api_user.security;

import java.io.IOException;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;

import com.example.api_user.service.CustomUserDetailsService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private final JwtTokenProvider jwtTokenProvider;
    private final CustomUserDetailsService userDetailsService;

    public JwtAuthenticationFilter(JwtTokenProvider jwtTokenProvider, CustomUserDetailsService userDetailsService) {
        this.jwtTokenProvider = jwtTokenProvider;
        this.userDetailsService = userDetailsService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
        HttpServletResponse response, FilterChain filterChain) 
        throws ServletException, IOException {
            String authHeader = request.getHeader("Authorization");

            if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                filterChain.doFilter(request, response);
                return;
            }

            String jwt = authHeader.substring(7);

            String username = jwtTokenProvider.extractUsername(jwt);

            UserDetails userDetails = null;

            // if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            //     userDetails = userDetailsService.loadUserByUsername(username);
            //     // UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            // }

            // if (jwtTokenProvider.isTokenValid(jwt, userDetails)){
            //     UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                
            //     authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

            //     SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            // }
            if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                UserDetails clientDetails = clientDetailsService.loadUserByUsername(username);
                if (jwtService.isValid(token, clientDetails)) {
                    UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                            clientDetails, null, clientDetails.getAuthorities());
                    authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                }
            }

            filterChain.doFilter(request, response);
    }
}
