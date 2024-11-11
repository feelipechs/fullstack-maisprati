package com.example.Atividade15.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Atividade15.model.Aluno;

public interface AlunoRepository extends JpaRepository<Aluno, Long> {
}
