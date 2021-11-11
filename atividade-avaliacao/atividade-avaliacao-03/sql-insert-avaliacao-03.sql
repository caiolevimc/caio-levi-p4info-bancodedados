INSERT INTO TB_CLIENTE (NOME, ENDERECO)
VALUES
	("José Maria Alves", "Av João Pessoa 2081"),
	("Maria Conceição Tavares", "Rua Waldery Uchoa 4"),
	("João Cosme Fonseca", "Rua Padre Franscisco Pinto 790"),
	("Tiago Cosme Fonseca", "Rua Padre Franscisco Pinto 790");
	

INSERT INTO TB_VENDENDOR (NOME)
VALUES
	("Luciano Arruda Cavalcante"),
	("Joana Alves Pessoa"),
	("Mercia Bessa Santos"),
	("Antonio de Padua Lopes");
	

INSERT INTO TB_PRODUTO (CODIGO, NOME, PRECO_UNIT)
VALUES
	(100, "Arroz Tio João", 6.00),
	(150, "Feijão Carioquinha", 5.50),
	(200, "Macarrão Fortaleza", 3.50),
	(250, "Oleo de Soja", 4.00),
	(300, "Manteiga Betania 500g", 8.00),
	(350, "Queijo Ricota Betania", 7.00);
	

INSERT INTO TB_NOTAFISCAL (CLIENTE_ID, VENDEDOR_ID, NUM_NF, SERIE)
VALUES
	(1, 1, 100, "A"),
	(3, 2, 101, "A"),
	(2, 3, 102, "A"),
	(4, 4, 103, "A"),
	(2, 1, 104, "A"),
	(1, 3, 105, "A"),
	(3, 2, 106, "A"),
	(4, 4, 107, "A");
	
	
INSERT INTO TB_ITEM_NOTAFISCAL (NUM_NF, PRODUTO_ID, QUANTIDADE)
VALUES	
	(100, 100, 5),
	(100, 150, 4),
	(100, 200, 4),
	(101, 250, 8),
	(101, 300, 4),
	(102, 100, 6),
	(102, 250, 8),
	(103, 300, 4),
	(103, 350, 4),
	(104, 150, 10),
	(104, 100, 12),
	(106, 150, 10),
	(106, 200, 10),
	(107, 100, 10),
	(107, 150, 10),
	(107, 200, 10);