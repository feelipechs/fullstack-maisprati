CREATE DATABASE escola;
USE escola;

CREATE TABLE Alunos (
	aluno_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    curso VARCHAR(100),
	nivel VARCHAR(50),
    idade INT
);

CREATE TABLE Turmas (
	turma_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nomeTurma VARCHAR(100) NOT NULL,
    sala VARCHAR(50),
    horario TIME
);

CREATE TABLE Matricula (
	matricula_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    aluno_id INT,
    turma_id INT,
    nota_1 DECIMAL(5,2),
    nota_2 DECIMAL(5,2),
    nota_3 DECIMAL(5,2),
    nota_final DECIMAL(5,2),
    nr_faltas INT,
    FOREIGN KEY (aluno_id) REFERENCES alunos(aluno_id),
    FOREIGN KEY (turma_id) REFERENCES turmas(turma_id)
);

INSERT INTO alunos (nome, curso, nivel, idade) VALUES('Ana Antunes', 'Química', 'Mestrado', 26);
INSERT INTO alunos (nome, curso, nivel, idade) VALUES('Jaques Antunes', 'ADS', 'Graduação', 24);
INSERT INTO alunos (nome, curso, nivel, idade) VALUES('Felipe Chagas', 'SWE', 'Graduação', 20);
INSERT INTO alunos (nome, curso, nivel, idade) VALUES('Denis Rocha', 'SWE', 'Graduação', 23);
INSERT INTO alunos (nome, curso, nivel, idade) VALUES('Emerson Costa', 'ADS', 'Graduação', 25);
INSERT INTO alunos (nome, curso, nivel, idade) VALUES('Fernanda Akemi', 'SI', 'Graduação', 33);
INSERT INTO alunos (nome, curso, nivel, idade) VALUES('Ferrero José de Oliveira Lopes Antunes', 'Segurança Canina', 'Graduação', 1);
INSERT INTO alunos (nome, curso, nivel, idade) VALUES('Filó', 'Coitadolandia', 'Doutorado', 12);

INSERT INTO Turmas (nomeTurma, sala, horario) VALUES ('Matemática Aplicada', 'Sala 201', '09:00:00');
INSERT INTO Turmas (nomeTurma, sala, horario) VALUES ('Banco de Dados', 'Sala 202', '09:00:00');
INSERT INTO Turmas (nomeTurma, sala, horario) VALUES ('Estatística', 'Sala 203', '09:00:00');
INSERT INTO Turmas (nomeTurma, sala, horario) VALUES ('Programação', 'Sala 204', '10:00:00');
INSERT INTO Turmas (nomeTurma, sala, horario) VALUES ('Física I', 'Sala 205', '10:00:00');
INSERT INTO Turmas (nomeTurma, sala, horario) VALUES ('Química Geral', 'Sala 206', '10:00:00');
INSERT INTO Turmas (nomeTurma, sala, horario) VALUES ('Algoritmos e Estruturas de Dados', 'Sala 207', '11:00:00');
INSERT INTO Turmas (nomeTurma, sala, horario) VALUES ('Redes de Computadores', 'Sala 208', '11:00:00');

INSERT INTO Matricula (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES(1, 1, 9, 8, 10, 9, 1);
INSERT INTO Matricula (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES(2, 1, 7, 6, 8, 7, 2);
INSERT INTO Matricula (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES(3, 2, 10, 9, 10, 9.67, 0);
INSERT INTO Matricula (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES(4, 2, 6, 5, 7, 6, 3);
INSERT INTO Matricula (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES(5, 3, 8, 8, 9, 8.33, 1);
INSERT INTO Matricula (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES(6, 3, 10, 10, 9, 9.67, 0);
INSERT INTO Matricula (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES(7, 4, 5, 6, 4, 5, 4);
INSERT INTO Matricula (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES(8, 4, 8, 9, 7, 8, 2);

-- 1)
SELECT nome FROM Alunos;

-- 2)
SELECT matricula_id FROM Matricula;

-- 3)
SELECT matricula_id 
FROM Matricula 
WHERE turma_id IS NULL;

-- 4)
SELECT aluno_id 
FROM Matricula 
WHERE turma_id = 4;

-- 5)
SELECT T.horario 
FROM Matricula M 
JOIN Alunos A ON M.aluno_id = A.aluno_id 
JOIN Turmas T ON M.turma_id = T.turma_id 
WHERE A.nome = 'Felipe Chagas';
