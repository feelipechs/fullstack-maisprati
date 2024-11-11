package com.example.Atividade15.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Atividade15.model.Aluno;
import com.example.Atividade15.model.Curso;
import com.example.Atividade15.repository.AlunoRepository;
import com.example.Atividade15.repository.CursoRepository;

import jakarta.persistence.EntityNotFoundException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EscolaService {
    @Autowired
    private AlunoRepository alunoRepository;

    @Autowired
    private CursoRepository cursoRepository;

    public Aluno criarAluno(Aluno aluno) {
        return alunoRepository.save(aluno);
    }

    public Curso criarCurso(Curso curso) {
        return cursoRepository.save(curso);
    }

    public void deletarAluno(Long alunoId) {
        Optional<Aluno> aluno = alunoRepository.findById(alunoId);
    
        if (aluno.isPresent()) {
            alunoRepository.delete(aluno.get());
        } else {
            throw new EntityNotFoundException("Aluno não encontrado com ID: " + alunoId);
        }
    }
    
    public void deletarCurso(Long cursoId) {
        Optional<Curso> curso = cursoRepository.findById(cursoId);
    
        if (curso.isPresent()) {
            cursoRepository.delete(curso.get());
        } else {
            throw new EntityNotFoundException("Curso não encontrado com ID: " + cursoId);
        }
    }
    

    public void matricularAlunoEmCurso(Long alunoId, Long cursoId) {
        Optional<Aluno> aluno = alunoRepository.findById(alunoId);
        Optional<Curso> curso = cursoRepository.findById(cursoId);

        if (aluno.isPresent() && curso.isPresent()) {
            aluno.get().getCursos().add(curso.get());
            alunoRepository.save(aluno.get());
        }
    }

    public void removerAlunoDeCurso(Long alunoId, Long cursoId) {
        Optional<Aluno> aluno = alunoRepository.findById(alunoId);
        Optional<Curso> curso = cursoRepository.findById(cursoId);

        if (aluno.isPresent() && curso.isPresent()) {
            aluno.get().getCursos().remove(curso.get());
            alunoRepository.save(aluno.get());
        }
    }

    public List<Aluno> listarTodosAlunos() {
        return alunoRepository.findAll();
    }

    public List<Curso> listarTodosCursos() {
        return cursoRepository.findAll();
    }    

    public List<Curso> listarCursosPorAluno(Long alunoId) {
        return alunoRepository.findById(alunoId)
                .map(aluno -> new ArrayList<>(aluno.getCursos()))
                .orElseThrow(() -> new EntityNotFoundException("Aluno não encontrado com ID: " + alunoId));
    }

    public List<Aluno> listarAlunosPorCurso(Long cursoId) {
        return cursoRepository.findById(cursoId)
                .map(curso -> new ArrayList<>(curso.getAlunos()))
                .orElseThrow(() -> new EntityNotFoundException("Curso não encontrado com ID: " + cursoId));
    }
}
