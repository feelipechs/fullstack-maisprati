// MÉDIA PONDERADA

const prompt = require('prompt-sync')();

let somaNum = 0;
let somaPeso = 0;

while(true) {
    let num = prompt('Insira números decimais ou digite "0" para encerrar: ');
    num = num.replace(',', '.');
    let numDec = parseFloat(num);

    if (numDec === 0) {
        let mediaP = somaNum / somaPeso; 
        console.log(`Média ponderada dos valores inseridos: ${mediaP}`)
        break;
    }
    
    let peso = prompt('Insira o peso do número: ');
    peso = peso.replace(',', '.');
    let pesoDec = parseFloat(peso);

    somaNum += numDec * pesoDec;
    somaPeso += pesoDec;
}