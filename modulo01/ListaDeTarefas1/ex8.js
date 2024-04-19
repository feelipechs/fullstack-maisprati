// ORDEM CRESCENTE

const prompt = require('prompt-sync')();

let num1 = parseInt(prompt('Insira o primeiro valor: '));
let num2 = parseInt(prompt('Insira o segundo valor: '));

if (num1 < num2) {
    console.log(`Ordem crescente: ${num1} e ${num2}`);
} else {
    console.log(`Ordem crescente: ${num2} e ${num1}`);
}