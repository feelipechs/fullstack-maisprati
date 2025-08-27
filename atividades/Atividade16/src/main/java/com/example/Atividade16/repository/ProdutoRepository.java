package com.example.Atividade16.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Atividade16.model.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Integer> {

}
