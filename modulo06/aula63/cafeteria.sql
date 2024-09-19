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
