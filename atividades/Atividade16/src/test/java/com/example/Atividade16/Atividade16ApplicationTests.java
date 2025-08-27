package com.example.Atividade16;

import com.example.Atividade16.model.Produto;
import com.example.Atividade16.repository.ProdutoRepository;
import com.example.Atividade16.service.ProdutoService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class Atividade16ApplicationTests {

    @Autowired
    private ProdutoService produtoService;

    @Autowired
    private ProdutoRepository produtoRepository;

    private Produto produto;

    @BeforeEach
    void setUp() {
        produtoRepository.deleteAll(); // limpa o banco antes de cada teste

        produto = new Produto();
        produto.setNome("Produto Teste");
        produto.setDescricao("Descrição Teste");
        produto.setPreco(100.0);
        produto.setQtdEstoque(10);

        produto = produtoService.addProduto(produto); // salva no H2
    }

    @Test
    void contextLoads() {
        // Verifica se o contexto do Spring Boot carrega
    }

	@Test
	void testCriarProduto() {
		Produto produto = new Produto();
		produto.setNome("Novo Produto");
		produto.setDescricao("Nova Descrição");
		produto.setPreco(50.0);
		produto.setQtdEstoque(5);

		Produto criado = produtoService.addProduto(produto);

		assertTrue(criado.getId() > 0, "ID deve ser maior que 0");
		assertEquals("Novo Produto", criado.getNome());
	}

    @Test
    void testListarProdutos() {
        List<Produto> produtos = produtoService.getAllProdutos();
        assertFalse(produtos.isEmpty());
        assertEquals(1, produtos.size());
    }

    @Test
    void testBuscarPorId() {
        Produto encontrado = produtoService.getProdutoById(produto.getId());
        assertNotNull(encontrado);
        assertEquals(produto.getNome(), encontrado.getNome());
    }

    @Test
    void testAtualizarProduto() {
        produto.setNome("Produto Atualizado");
        produto.setPreco(150.0);

        Produto atualizado = produtoService.atualizarProduto(produto.getId(), produto);
        assertEquals("Produto Atualizado", atualizado.getNome());
        assertEquals(150.0, atualizado.getPreco());
    }

    @Test
    void testDeletarProduto() {
        produtoService.deletarProduto(produto.getId());
        Produto deletado = produtoService.getProdutoById(produto.getId());
        assertNull(deletado);
    }
}
