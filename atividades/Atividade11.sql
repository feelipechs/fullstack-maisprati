CREATE DATABASE cafeteria;
USE cafeteria;

CREATE TABLE Cardapio (
	cardapio_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nome_cafe VARCHAR(100) UNIQUE NOT NULL,
    descricao VARCHAR(255),
    preco_unitario DECIMAL(5,2) NOT NULL
);

CREATE TABLE Comanda (
	comanda_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    data_comanda DATE NOT NULL,
    mesa INT NOT NULL,
    nome_cliente VARCHAR(100) NOT NULL
);

CREATE TABLE itensComanda (
	item_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    comanda_id INT NOT NULL,
    cardapio_id INT NOT NULL,
    quantidade INT NOT NULL,
    FOREIGN KEY (comanda_id) REFERENCES comanda(comanda_id),
    FOREIGN KEY (cardapio_id) REFERENCES cardapio(cardapio_id),
    UNIQUE(comanda_id, cardapio_id)
);

INSERT INTO cardapio(nome_cafe, descricao, preco_unitario) VALUES('Expresso', 'Café puro', 5.00);
INSERT INTO cardapio(nome_cafe, descricao, preco_unitario) VALUES('Cappuccino', 'Café expresso com leite vaporizado', 4.50);

INSERT INTO comanda(data_comanda, mesa, nome_cliente) VALUES('2024-09-18', 5, 'Magrid');
INSERT INTO comanda(data_comanda, mesa, nome_cliente) VALUES('2024-09-18', 7, 'Minerva');

INSERT INTO itensComanda(comanda_id, cardapio_id, quantidade, preco_total) VALUES(1, 1, 3, 15.00);
INSERT INTO itensComanda(comanda_id, cardapio_id, quantidade, preco_total) VALUES(1, 2, 1, 7.50);
INSERT INTO itensComanda(comanda_id, cardapio_id, quantidade, preco_total) VALUES(2, 1, 1, 5.00);

-- 1)
SELECT * FROM Cardapio
ORDER BY nome_cafe;

-- 2)
SELECT 
    C.comanda_id,
    C.data_comanda,
    C.mesa,
    C.nome_cliente,
    IC.comanda_id AS codigo_comanda,
    CA.nome_cafe,
    CA.descricao,
    IC.quantidade,
    CA.preco_unitario,
    (IC.quantidade * CA.preco_unitario) AS preco_total
FROM Comanda C
JOIN itensComanda IC ON C.comanda_id = IC.comanda_id
JOIN Cardapio CA ON IC.cardapio_id = CA.cardapio_id
ORDER BY C.data_comanda, C.comanda_id, CA.nome_cafe;

-- 3)
SELECT 
    C.comanda_id,
    C.data_comanda,
    C.mesa,
    C.nome_cliente,
    SUM(IC.quantidade * CA.preco_unitario) AS valor_total
FROM Comanda C
JOIN itensComanda IC ON C.comanda_id = IC.comanda_id
JOIN Cardapio CA ON IC.cardapio_id = CA.cardapio_id
GROUP BY C.comanda_id, C.data_comanda, C.mesa, C.nome_cliente
ORDER BY C.data_comanda;

-- 4)
SELECT 
    C.comanda_id,
    C.data_comanda,
    C.mesa,
    C.nome_cliente,
    SUM(IC.quantidade * CA.preco_unitario) AS valor_total
FROM Comanda C
JOIN itensComanda IC ON C.comanda_id = IC.comanda_id
JOIN Cardapio CA ON IC.cardapio_id = CA.cardapio_id
GROUP BY C.comanda_id, C.data_comanda, C.mesa, C.nome_cliente
HAVING COUNT(DISTINCT IC.cardapio_id) > 1
ORDER BY C.data_comanda;

-- 5)
SELECT 
    C.data_comanda,
    SUM(IC.quantidade * CA.preco_unitario) AS total_faturamento
FROM Comanda C
JOIN itensComanda IC ON C.comanda_id = IC.comanda_id
JOIN Cardapio CA ON IC.cardapio_id = CA.cardapio_id
GROUP BY C.data_comanda
ORDER BY C.data_comanda;
