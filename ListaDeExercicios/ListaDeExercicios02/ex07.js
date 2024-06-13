const prompt = require('prompt-sync')();

function aluguelCarros() {
    console.log("1) Popular\n2) Luxo")
    let tipoDeCarro = parseInt(prompt("Qual o tipo do carro alugado? "));

    let carros = []

    if (tipoDeCarro === 1) {
        carros.push({
            tipo: "popular",
            precoAluguel: 90,
            diasAlugados: parseInt(prompt("Dias alugado: ")),
            km: parseInt(prompt("Km percorridos: ")),
            precoKm: 0.20,
            novoPrecoKm: function() {
                if (this.km > 100) {
                    this.precoKm = 0.10;
                }
            }
        })
    } else if (tipoDeCarro === 2) {
        carros.push({
            tipo: "luxo",
            precoAluguel: 150,
            diasAlugados: parseInt(prompt("Dias alugados: ")),
            km: parseInt(prompt("Km percorridos: ")),
            precoKm: 0.30,
            novoPrecoKm: function() {
                if (this.km > 200) {
                    this.precoKm = 0.25;
                }
            }
        })
    }

    carros.forEach(carro => {
        carro.novoPrecoKm();
    });

    if (carros.length > 0) {
        let carro = carros[0];
        let totalPrice = (carro.precoAluguel * carro.diasAlugados) + (carro.km * carro.precoKm);
            console.log(`Valor total: R$${totalPrice.toFixed(2)}`);
    }
}

aluguelCarros();