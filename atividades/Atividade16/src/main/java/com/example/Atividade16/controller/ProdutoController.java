package com.example.Atividade16.controller;

import java.util.List;
import org.springframework.web.bind.annotation.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import com.example.Atividade16.model.Produto;
import com.example.Atividade16.service.ProdutoService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@RequestMapping("/produtos")
public class ProdutoController {
    @Autowired
    private ProdutoService produtoService;
    
    @GetMapping
    public List<Produto> getAllProdutos() {
        return produtoService.getAllProdutos();
    }
    
    @GetMapping("/{id}")
    public Produto getProdutoById(@PathVariable int id) {
        return produtoService.getProdutoById();
    }
    
    @PostMapping("/produtos")
    public Produto addProduto(@RequestBody Produto produto) {
        return produtoService.addProduto(produto);
    }
    
    @PutMapping("/produtos/{id}")
    public ResponseEntity<Produto> atualizarProduto(@PathVariable int id, @RequestBody Produto produto) {
        //TODO: process PUT request
        Produto produto = produto.atualizarProduto(id, produto);
    }

    @DeleteMapping("/produtos/{id}")
    public Produto deletarProduto(@PathVariable int id) {
        produtoService.deletarProduto(id);
    }
}
