// // // Array ou Vetor

// // let listaCompras = Array();

// // listaCompras[0] = "Shampoo";
// // listaCompras[1] = "Condicionador";
// // listaCompras['x'] = 100;

// // console.log(listaCompras);

// // let listaFrutas = ['Banana', 'Morango'];

// // console.log(listaFrutas);

// // let listaViagem = Array('Passagens', 'Malas');

// // console.log(listaViagem);

// // Arrays multidimensionais

// let listaCoisas = Array();

// listaCoisas['Frutas'] = Array();

// listaCoisas['Frutas'][0] = "Morango";
// listaCoisas['Frutas'][1] = "Uva";
// listaCoisas['Frutas'][2] = "Laranja";
// listaCoisas['Frutas'][3] = "Bergamota";

// listaCoisas['Viagem'] = Array();
// listaCoisas['Viagem'][0] = "Passagens";
// listaCoisas['Viagem'][1] = "Malas";

// // Inserção de elemtnso no final do array

// listaCoisas['Frutas'].push('Banana');

// // Inserção de elementos no começo do array

// listaCoisas['Frutas'].unshift('Limão');

// // Exclusão de elementos no final do array

// listaCoisas['Frutas'].pop();

// // Exclusão de elementos no final do array

// listaCoisas['Frutas'].shift();
// console.log(listaCoisas);

// let listaProdutos = Array('Lousa', 'Caneta', 'Chuteira', 'Garrafa de Agua');

// console.log(listaProdutos.sort());

// Funções

// function calcularAreaTerreno(largura, comprimento) {

//     let area = largura * comprimento

//     return area
// }

// let prompt = require("prompt-sync")();

// let lg = prompt("Digite a largura do terreno em metros: ");
// let cp = prompt("Digite o comprimento do terreno em metros: ");

// // chamada da função e passagem de parâmetros

// let resultado = calcularAreaTerreno(lg, cp);

// console.log('O terreno possui ' + resultado + ' metros quadrados')

// Callback function

// function exibirFuncao(callbackSucesso, callbackErro) {
//     if(true) {
//         callbackSucesso('Funções de callback em caso de sucesso');
//     } else {
//         callbackErro('Função de callback em caso de erro');
//     }
// }

// let callbackSucesso = function(titulo) {
//     console.log(titulo);
// }

// let callbackErro = function(erro) {
//     console.log(erro);
// }

// exibirFuncao(callbackSucesso, callbackErro)

// calculadora callback

let soma = function(num1, num2) {
    return num1 + num2;
}

let subtracao = function(num1, num2) {
    return num1 - num2;
}

let multiplicacao = function(num1, num2) {
    return num1 * num2;
}

let divisao = function(num1, num2) {
    return num1 / num2;
}

function calculadora(operacao, num1, num2, soma, subtracao, multiplicacao, divisao) {
    switch(operacao){
        case "soma":
            let resultado = soma(num1, num2)
            return resultado
            break
    }
}

console.log(calculadora("soma", 10, 10, soma));