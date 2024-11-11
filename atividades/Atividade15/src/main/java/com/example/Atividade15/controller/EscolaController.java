package com.example.Atividade15.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.Atividade15.model.Aluno;
import com.example.Atividade15.model.Curso;
import com.example.Atividade15.service.EscolaService;

import java.util.List;

@RestController
@RequestMapping("/api")
public class EscolaController {
    @Autowired
    private EscolaService escolaService;

    @PostMapping("/alunos")
    public ResponseEntity<Aluno> adicionarAluno(@RequestBody Aluno aluno) {
        Aluno alunoCriado = escolaService.criarAluno(aluno);
        return ResponseEntity.status(HttpStatus.CREATED).body(alunoCriado);
    }

    @PostMapping("/cursos")
    public ResponseEntity<Curso> adicionarCurso(@RequestBody Curso curso) {
        Curso novoCurso = escolaService.criarCurso(curso);
        return new ResponseEntity<>(novoCurso, HttpStatus.CREATED);
    }

    @DeleteMapping("/alunos/{id}")
    public void deletarAluno(@PathVariable Long id) {
        escolaService.deletarAluno(id);
    }

    @DeleteMapping("/cursos/{id}")
    public void deletarCurso(@PathVariable Long id) {
        escolaService.deletarCurso(id);
    }

    @PostMapping("/alunos/{id}/cursos/{cursoId}")
    public ResponseEntity<Void> matricularAlunoEmCurso(@PathVariable Long id, @PathVariable Long cursoId) {
        escolaService.matricularAlunoEmCurso(id, cursoId);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping("/alunos/{id}/cursos/{cursoId}")
    public void removerAlunoDeCurso(@PathVariable Long id, @PathVariable Long cursoId) {
        escolaService.removerAlunoDeCurso(id, cursoId);
    }

    @GetMapping("/alunos")
    public ResponseEntity<List<Aluno>> listarAlunos() {
        List<Aluno> alunos = escolaService.listarTodosAlunos();
        return ResponseEntity.ok(alunos);
    }

    @GetMapping("/cursos")
    public ResponseEntity<List<Curso>> listarCursos() {
        List<Curso> cursos = escolaService.listarTodosCursos();
        return ResponseEntity.ok(cursos);
    }

    @GetMapping("/alunos/{id}/cursos")
    public List<Curso> listarCursosPorAluno(@PathVariable Long id) {
        return escolaService.listarCursosPorAluno(id);
    }

    @GetMapping("/cursos/{id}/alunos")
    public List<Aluno> listarAlunosPorCurso(@PathVariable Long id) {
        return escolaService.listarAlunosPorCurso(id);
    }
}
