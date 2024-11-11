const prompt = require('prompt-sync')();

function calcularMulta() {
    let velocidade = parseFloat(prompt("Insira a velocidade do veículo em km/h: "));

    if (velocidade > 80) {
        console.log(`Você ultrapassou o limite de velocidade. Valor da multa: R$${(velocidade - 80) * 5}`);
    } else {
        console.log("Tudo certo.");
    }
}

calcularMulta();