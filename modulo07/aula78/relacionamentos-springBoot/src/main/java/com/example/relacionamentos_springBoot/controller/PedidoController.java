package com.example.relacionamentos_springBoot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.relacionamentos_springBoot.model.Pedido;
import com.example.relacionamentos_springBoot.service.PedidoService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
@RequestMapping("/pedidos")
public class PedidoController {
    @Autowired
    private PedidoService pedidoService;

    @PostMapping
    public ResponseEntity<Pedido> criarPedido(@RequestBody Pedido pedido) {
        Pedido pedidoSalvo = pedidoService.salvarPedidoComProdutos(pedido);        
        return ResponseEntity.ok(pedidoSalvo);
    }
    
    @GetMapping
    public ResponseEntity<List<Pedido>> listarPedidos() {
        List<Pedido> pedidos = pedidoService.listarPedidos();
        return ResponseEntity.ok(pedidos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pedido> buscarPedidoPorId(@PathVariable Long id) {
        Pedido pedido = pedidoService.buscarPedido(id);

        if (pedido != null) {
            return ResponseEntity.ok(pedido);
        } else {
            return ResponseEntity.notFound().build();
        }
        // if (id == null || id <= 0) {
        //     return ResponseEntity.badRequest().build(); // Retorna 400 se o ID for inválido
        // }
    
        // Pedido pedido = pedidoService.buscarPedido(id);
        // if (pedido == null) {
        //     return ResponseEntity.notFound().build(); // Retorna 404 se não encontrado
        // }
    
        // return ResponseEntity.ok(pedido);
    }
}
