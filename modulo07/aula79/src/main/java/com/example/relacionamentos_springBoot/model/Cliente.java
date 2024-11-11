package com.example.relacionamentos_springBoot.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Entity
@Data
public class Cliente {
    @Id
    @GenerateValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.uuid.UuidGenerator"
    )
    private UUID id;
    private String name;
    @OneToOne
    @JoinColumn(name = "conta_id", referencedColumnName = "id")
    private Conta conta;
}
