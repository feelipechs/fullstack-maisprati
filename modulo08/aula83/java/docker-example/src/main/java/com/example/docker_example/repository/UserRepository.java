package com.example.docker_example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.docker_example.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
