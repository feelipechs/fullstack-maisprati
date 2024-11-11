package com.example.relacionamentos_springBoot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.relacionamentos_springBoot.model.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {

}
