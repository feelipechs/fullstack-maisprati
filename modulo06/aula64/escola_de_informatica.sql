-- CREATE DATABASE escola_de_informatica;
-- USE escola_de_informatica;

CREATE TABLE Turmas (
	id_turma INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    horario_aula TIME NOT NULL,
    duracao_aula TIME NOT NULL,
    data_inicial DATE NOT NULL,
    data_final DATE NOT NULL,
    tipo_curso VARCHAR(30) NOT NULL
    -- professor
    -- aluno monitor
);

CREATE TABLE Professor (
	id_professor INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    cpf VARCHAR(15) NOT NULL,
    nome VARCHAR(30) NOT NULL,
    data_nascimento DATE NOT NULL,
    -- titulacao
    -- telefones
);

CREATE TABLE Alunos (
	-- código de matricula, data de matrícula, nome, endereço, telefone, data de nascimento, altura e peso.
    id_aluno INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    codigo_matricula VARCHAR(30) NOT NULL,
    data_matricula DATE NOT NULL,
    nome VARCHAR(30) NOT NULL,
    endereco VARCHAR(30) NOT NULL,
    -- telefone
    data_nascimento DATE NOT NULL,
    altura DECIMAL(1,2) NOT NULL,
    peso DECIMAL(1,2) NOT NULL
);

-- Alunos
-- Matriculas
-- Professores
-- Contatos
-- Cursos
-- Turmas
-- TurmaAluno
-- Ausencias