const prompt = require('prompt-sync')();

function pesoIdeal() {
    let sexo = parseInt(prompt("1) Homem | 2) Mulher: "));
    let altura = parseFloat(prompt("Altura: "));

    if (sexo === 1) {
        console.log(`Peso ideal: ${((72.7 * altura) - 58).toFixed(2)}kg`)
    } else if (sexo === 2) {
        console.log(`Peso ideal: ${((62.1 * altura) - 44.7).toFixed(2)}kg`)
    }
}

pesoIdeal();