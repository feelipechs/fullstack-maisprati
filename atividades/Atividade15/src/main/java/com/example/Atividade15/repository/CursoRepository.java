package com.example.Atividade15.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Atividade15.model.Curso;

public interface CursoRepository extends JpaRepository<Curso, Long> {
}
