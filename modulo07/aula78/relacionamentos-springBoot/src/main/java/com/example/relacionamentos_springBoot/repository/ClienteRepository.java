package com.example.relacionamentos_springBoot.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.relacionamentos_springBoot.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, UUID> {

}
