const prompt = require('prompt-sync')();

function valorPassagem() {
    let distancia = parseFloat(prompt("Insira a distância que percorrerá: "));

    if (distancia > 200) {
        console.log(`Valor da passagem: R$0,45 por km. Valor total da viagem: R$${(distancia * 0.45).toFixed(2)}`);
    } else {
        console.log(`Valor da passagem: R$0,50 por km. Valor total da viagem: R$${(distancia * 0.50).toFixed(2)}`);
    }
}

valorPassagem();