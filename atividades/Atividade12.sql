CREATE DATABASE escola_de_informatica;
USE escola_de_informatica;

CREATE TABLE Professor (
    id_professor INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    cpf VARCHAR(15) NOT NULL,
    nome VARCHAR(30) NOT NULL,
    data_nascimento DATE NOT NULL,
    titulacao VARCHAR(50),
    telefone VARCHAR(15)
);

CREATE TABLE Alunos (
    id_aluno INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    codigo_matricula VARCHAR(30) NOT NULL,
    data_matricula DATE NOT NULL,
    nome VARCHAR(30) NOT NULL,
    endereco VARCHAR(100) NOT NULL,
    telefone VARCHAR(15),
    data_nascimento DATE NOT NULL,
    altura DECIMAL(4,2) NOT NULL,
    peso DECIMAL(5,2) NOT NULL
);

CREATE TABLE Turmas (
    id_turma INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    horario_aula TIME NOT NULL,
    duracao_aula TIME NOT NULL,
    data_inicial DATE NOT NULL,
    data_final DATE NOT NULL,
    tipo_curso VARCHAR(30) NOT NULL,
    id_professor INT,
    aluno_monitor INT,
    FOREIGN KEY (id_professor) REFERENCES Professor(id_professor),
    FOREIGN KEY (aluno_monitor) REFERENCES Alunos(id_aluno)
);

CREATE TABLE TurmaAluno (
    id_turma INT,
    id_aluno INT,
    PRIMARY KEY (id_turma, id_aluno),
    FOREIGN KEY (id_turma) REFERENCES Turmas(id_turma),
    FOREIGN KEY (id_aluno) REFERENCES Alunos(id_aluno)
);

CREATE TABLE Faltas (
    id_falta INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    id_aluno INT,
    id_turma INT,
    data_falta DATE NOT NULL,
    FOREIGN KEY (id_aluno) REFERENCES Alunos(id_aluno),
    FOREIGN KEY (id_turma) REFERENCES Turmas(id_turma)
);

CREATE TABLE Matriculas (
    id_matricula INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    id_aluno INT NOT NULL,
    id_turma INT NOT NULL,
    data_matricula DATE NOT NULL,
    status VARCHAR(20),
    FOREIGN KEY (id_aluno) REFERENCES Alunos(id_aluno),
    FOREIGN KEY (id_turma) REFERENCES Turmas(id_turma),
    UNIQUE (id_aluno, id_turma)
);

CREATE TABLE Contatos (
    id_contato INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    id_professor INT,
    id_aluno INT,
    telefone VARCHAR(15),
    FOREIGN KEY (id_professor) REFERENCES Professor(id_professor),
    FOREIGN KEY (id_aluno) REFERENCES Alunos(id_aluno)
);

INSERT INTO Professor (cpf, nome, data_nascimento, titulacao, telefone) VALUES
('12345678900', 'Carlos Silva', '1980-01-15', 'Mestre', '1234-5678'),
('09876543211', 'Ana Costa', '1985-03-22', 'Doutora', '9876-5432');

INSERT INTO Alunos (codigo_matricula, data_matricula, nome, endereco, telefone, data_nascimento, altura, peso) VALUES
('2023-001', '2023-01-15', 'João Pereira', 'Rua A, 123', '1111-2222', '2000-05-10', 1.75, 70.0),
('2023-002', '2023-02-20', 'Maria Oliveira', 'Rua B, 456', '3333-4444', '1999-08-15', 1.65, 55.0);

INSERT INTO Turmas (horario_aula, duracao_aula, data_inicial, data_final, tipo_curso, id_professor, aluno_monitor) VALUES
('09:00:00', '01:30:00', '2023-01-01', '2023-06-30', 'Programação', 1, 1),
('10:30:00', '01:30:00', '2023-02-01', '2023-07-30', 'Banco de Dados', 2, 2);

INSERT INTO TurmaAluno (id_turma, id_aluno) VALUES
(1, 1),
(1, 2),
(2, 1);

INSERT INTO Faltas (id_aluno, id_turma, data_falta) VALUES
(1, 1, '2023-03-01'),
(2, 1, '2023-03-02');

INSERT INTO Matriculas (id_aluno, id_turma, data_matricula, status) VALUES
(1, 1, '2023-01-15', 'ativa'),
(2, 2, '2023-02-20', 'ativa');

INSERT INTO Contatos (id_professor, telefone) VALUES
(1, '1234-5678'),
(1, '2345-6789'),
(2, '9876-5432');

INSERT INTO Contatos (id_aluno, telefone) VALUES
(1, '1111-2222'),
(1, '2222-3333'),
(2, '3333-4444');

-- 1)
select * from alunos;

-- 2)
SELECT 
    A.id_aluno,
    A.nome,
    T.id_turma,
    T.horario_aula,
    T.data_inicial,
    T.data_final,
    T.tipo_curso
FROM Alunos A
JOIN TurmaAluno TA ON A.id_aluno = TA.id_aluno
JOIN Turmas T ON TA.id_turma = T.id_turma;

-- 3)
SELECT 
    A.id_aluno,
    A.nome
FROM Alunos A
LEFT JOIN Faltas F ON A.id_aluno = F.id_aluno
WHERE F.id_aluno IS NULL;

-- 4)
SELECT 
    P.nome,
    COUNT(T.id_turma) AS quantidade_turmas
FROM Professor P
LEFT JOIN Turmas T ON P.id_professor = T.id_professor
GROUP BY P.id_professor, P.nome;

-- 5)
SELECT 
    P.nome AS nome_professor,
    (SELECT C.telefone FROM Contatos C WHERE C.id_professor = P.id_professor LIMIT 1) AS telefone_professor,
    T.id_turma,
    T.data_inicial,
    T.data_final,
    T.horario_aula,
    T.tipo_curso,
    A.nome AS nome_aluno
FROM 
    Professor P
JOIN 
    Turmas T ON P.id_professor = T.id_professor
JOIN 
    TurmaAluno TA ON T.id_turma = TA.id_turma
JOIN 
    Alunos A ON TA.id_aluno = A.id_aluno
ORDER BY 
    P.nome, T.id_turma, A.nome;

-- ---------

-- 1)
UPDATE Professor
SET nome = UPPER(nome);

-- 2)
SET @turma_maior_numero_alunos = (
    SELECT TA.id_turma 
    FROM TurmaAluno TA 
    GROUP BY TA.id_turma 
    ORDER BY COUNT(*) DESC 
    LIMIT 1
);

UPDATE Alunos
SET nome = UPPER(nome)
WHERE id_aluno IN (
    SELECT TA.id_aluno 
    FROM TurmaAluno TA 
    WHERE TA.id_turma = @turma_maior_numero_alunos
);

-- 3)
DELETE FROM Faltas
WHERE id_aluno IN (
    SELECT aluno_monitor 
    FROM Turmas 
    WHERE aluno_monitor IS NOT NULL
);
