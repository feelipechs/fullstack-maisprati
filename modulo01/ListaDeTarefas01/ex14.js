// MÉDIA ARITMÉTICA DE NÚMEROS DECIMAIS

const prompt = require('prompt-sync')();

let soma = 0;
let contador = 0;

while (true) {
    let num = prompt('Insira números decimais ou digite "0" para encerrar: ');
    num = num.replace(',', '.');
    let numDec = parseFloat(num);

    if (numDec === 0) {
        let media = soma / contador;
        console.log(`Média arimética dos valores decimais inseridos: ${media}`)
        break;
    }
    
    soma += numDec;
    contador++;
}


