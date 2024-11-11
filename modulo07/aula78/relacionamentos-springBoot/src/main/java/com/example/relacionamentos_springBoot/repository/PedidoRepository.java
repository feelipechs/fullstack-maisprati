package com.example.relacionamentos_springBoot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.relacionamentos_springBoot.model.Pedido;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {

}
