package com.example.Atividade16.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Atividade16.model.Produto;
import com.example.Atividade16.repository.ProdutoRepository;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    // Criar produto
    public Produto addProduto(Produto produto) {
        return produtoRepository.save(produto);
    }

    // Listar todos os produtos
    public List<Produto> getAllProdutos() {
        return produtoRepository.findAll();
    }

    // Buscar produto por ID
    public Produto getProdutoById(int id) {
        Optional<Produto> produto = produtoRepository.findById(id);
        return produto.orElse(null);
    }

    // Atualizar produto
    public Produto atualizarProduto(int id, Produto produtoAtualizado) {
        return produtoRepository.findById(id).map(produto -> {
            produto.setNome(produtoAtualizado.getNome());
            produto.setDescricao(produtoAtualizado.getDescricao());
            produto.setPreco(produtoAtualizado.getPreco());
            produto.setQtdEstoque(produtoAtualizado.getQtdEstoque());
            return produtoRepository.save(produto);
        }).orElse(null);
    }

    // Deletar produto
    public void deletarProduto(int id) {
        produtoRepository.deleteById(id);
    }
}
