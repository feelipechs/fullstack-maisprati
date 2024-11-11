package com.example.relacionamentos_springBoot.model;

import java.util.UUID;

import org.hibernate.annotations.GenericGenerator;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    // @GenericGenerator(
    //         name = "UUID",
    //         strategy = "org.hibernate.id.uuid.UuidGenerator"
    // )
    private UUID id;
    private String name;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "conta_id", referencedColumnName = "id")
    private Conta conta;
}
