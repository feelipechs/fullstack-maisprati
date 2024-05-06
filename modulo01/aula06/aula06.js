// aula 06

//-- ex1 par impar

//-- ex2 maior ou menor

//-- ex3 triangulo 

// const prompt = require('prompt-sync')();

// let lado1 = parseInt(prompt("Digite o valor do primeiro lado: "));
// let lado2 = parseInt(prompt("Digite o valor do primeiro lado: "));
// let lado3 = parseInt(prompt("Digite o valor do primeiro lado: "));

// if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1){
//     console.log("É possível formar um triângulo!");
// } else {
//     console.log("Não é possível formar um triângulo!");
// }

//-- ex5 calculadora 

// const prompt = require("prompt-sync")();

// let num1 = parseInt(prompt("Digite o primeiro número: "));
// let num2 = parseInt(prompt("Digite o segundo número: "));
// let operacao = prompt("Qual a operação desejada? (+, -, /, *)")

// let resultado;

// if (operacao === '+'){
//     resultado = num1 + num2;
// } else if (operacao === '-') {
//     resultado = num1 - num2;
// } else if (operacao === '*') {
//     resultado = num1 * num2;
// } else if (operacao === '/') {
//     resultado = num1 / num2;
//     if (num2 !== 0) {
//         resultado = num1 / num2;
//     } else {
//         console.log("Erro: divisão por zero.");
//         resultado = undefined
//     }
// } else {
//     console.log("Operação inválida");
// }

// if (resultado !== undefined) {
//     console.log("Resultado:", resultado);
// }

//-- ex6 dia da semana 

// const prompt = require("prompt-sync")();

// let dia = parseInt(prompt("Insira um número do dia da semana: "));

// let nomeDia;

// switch(dia) {
//     case 1:
//         nomeDia = "Domingo";
//         break;
//     case 2:
//         nomeDia = "Segunda-feira";
//         break;
//     case 3:
//         nomeDia = "Terça-feira";
//         break;
//     case 4:
//         nomeDia = "Quarta-feira"
//         break;
//     case 5:
//         nomeDia = "Quinta-feira";
//         break;
//     case 6:
//         nomeDia = "Sexta-feira";
//         break;
//     case 7:
//         nomeDia = "Sábado"
//         break;
//     default:
//         console.log("Digite um número de 1 a 7");
//         break;
// }

// console.log("O dia é:", nomeDia);

//-- ex7 tabuada

// const prompt = require("prompt-sync")();

// let contador = 0;
// let multiplicando = 5;

// for (let contador = 0; contador <= 10; contador++) {
//     console.log(${contador});
// }

//--ex8 decrescente

// let i = 10;

// while(i >= 1) {
//     i--;
//     console.log(i);
// }

//-- ex9 multiplo 5 menor que 100

// let i = 0;

// while(i < 100) {
//     i+=5;
//     console.log(i);
// }

//-- ex10 soma de numero entre 1 e 1000

// let i = 0;
// let soma = 0;

// while (i <= 1000) {
//     soma += i;
//     i++;
// }

// console.log(soma);

//--ex11 testando senha

// const prompt = require("prompt-sync")();
// let senha

// do {
//     senha = prompt("Digite a senha: ");
// } while(senha !== "1234")

// console.log("Senha correta!")

//-- ex12 adivinhar numero entre 1 e 10

// const prompt = require("prompt-sync")();
// const numeroCorreto = Math.floor((Math.random() * 10) + 1)
// console.log(numeroCorreto)
// let tentativa

// do {
//     tentativa = parseInt(prompt("Adivinhe o número entre 1 e 10:"))
//     if (tentativa < numeroCorreto){
//         console.log("")
//     }
// }