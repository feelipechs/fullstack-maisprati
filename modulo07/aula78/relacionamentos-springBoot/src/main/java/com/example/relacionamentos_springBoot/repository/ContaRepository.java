package com.example.relacionamentos_springBoot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.relacionamentos_springBoot.model.Conta;

public interface ContaRepository extends JpaRepository<Conta, Long> {

}
