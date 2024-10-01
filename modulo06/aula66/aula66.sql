-- Exercício: Analisando a Performance de Consultas com Índices no MySQL

-- Objetivo: Compreender a criação de índices e como eles melhoram a performance das consultas em grandes volumes de dados.

-- Parte 1: Preparação do Ambiente

--     Criação da Tabela: Crie uma tabela chamada clientes, que contém uma lista de clientes com dados simulados. Para isso, execute o seguinte script SQL:

-- CREATE DATABASE aula66;
-- USE aula66;

CREATE TABLE clientes (
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(100),
	email VARCHAR(100),
	telefone VARCHAR(15),
	cidade VARCHAR(50),
	data_registro DATE
);

-- Inserção de Dados

-- Popule a tabela clientes com 100.000 registros simulados. Você pode utilizar um loop para gerar dados fictícios ou usar scripts prontos. Se não tiver ferramentas automáticas para gerar os dados, execute o seguinte SQL para inserir alguns dados de exemplo:


INSERT INTO clientes (nome, email, telefone, cidade, data_registro)
VALUES 
('João Silva', 'joao.silva@gmail.com', '123456789', 'São Paulo', '2020-01-01'),
('Maria Souza', 'maria.souza@gmail.com', '987654321', 'Rio de Janeiro', '2020-05-15'),
('Carlos Pereira', 'carlos.pereira@gmail.com', '123987654', 'Belo Horizonte', '2021-07-20'),
('Ana Costa', 'ana.costa@gmail.com', '987321654', 'Porto Alegre', '2019-10-12');

-- Dica: Gere dados adicionais para ter um volume considerável. Se necessário, use uma ferramenta de geração de dados ou um script que insere múltiplos registros.


-- Parte 2: Teste de Performance sem Índices

--     Consulta Lenta

--     Execute a seguinte consulta para buscar todos os clientes de uma cidade específica. Note o tempo de execução da consulta sem o uso de índices.

SELECT * FROM clientes WHERE cidade = 'São Paulo';

-- Analisando a Performance

-- Utilize o comando EXPLAIN para verificar como o MySQL está executando essa consulta e quais otimizações podem ser feitas.


EXPLAIN SELECT * FROM clientes WHERE cidade = 'São Paulo';

-- Pergunta: Qual é o tempo de execução da consulta? O MySQL está utilizando algum índice?