// TRIÂNGULOS

const prompt = require('prompt-sync')();

let ladoA = parseFloat(prompt('Insira o primeiro lado do triângulo: '));
let ladoB = parseFloat(prompt('Insira o segundo lado do triângulo: '));
let ladoC = parseFloat(prompt('Insira o terceiro lado do triângulo: '));

if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    console.log('Essas medidas formam um triângulo!');

    if (ladoA === ladoB && ladoB === ladoC) {
        console.log('Triângulo equilátero: todos os lados iguais.');
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log('Triângulo isósceles: dois lados iguais.');
    } else if (ladoA != ladoB && ladoB != ladoC) {
        console.log('Triângulo escaleno: todos os lados diferentes.');
    }
} else {
    console.log('Essas medidas não formam um triângulo!')
}