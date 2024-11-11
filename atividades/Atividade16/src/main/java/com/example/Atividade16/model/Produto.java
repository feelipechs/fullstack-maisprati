package com.example.Atividade16.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;

    private String nome;
    private String descricao;
    private Double preco;
    private int qtdEstoque;
}
