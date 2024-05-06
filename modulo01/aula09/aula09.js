// aula09

// const pessoa = {
//     nome: "Lucas",
//     idade: 18,
//     email: "lucas@teste.com",
//     profissao: "Músico",
//     empregado: true,
//     descrever: function () {
//         console.log(Meu nome é ${this.nome} e tenho ${this.idade} anos)
//     }
// }

// pessoa['nome'];
// for (let chave in pessoa) {
//     console.log(chave + ': ' + pessoa[chave]);
// }

// let numeros = [10, 20, 100];

// for (let numero of numeros) {
//     console.log(numero);
// }

/*
    VocÊ tem uma lista de objetos que representam diferentes tipos de veículos e suas características. Seu objetivo é primeiro usar o FOR IN para listar todas as propriedades e valores de cada veículo. DEepois, utilizar o FOr OF para listar apenas os modelos dos veiculos.
*/

// let carros = [
//     {
//         marca: "Chrysler",
//         modelo: "300c",
//         cor: "Preto",
//         ano: 2000,
//         preco: 50000
//     },

//     {
//         marca: "Ford",
//         modelo: "Mustang",
//         cor: "Azul",
//         ano: 2010,
//         preco: 60000
//     },

//     {
//         marca: "Dodge",
//         modelo: "Challenger",
//         cor: "Branco",
//         ano: 2012,
//         preco: 40000
//     }
// ]

// for (teste in carros) {
//     console.log(carros);
// }

// for (let carro of carros) {
//     console.log(carro.marca);
// }

/*
    Construa um array de números e calcule a soma total dos numeros e tambem imprima cada numero multiplicado por dois
*/

// let numeros = [10, 20, 30, 40, 50];
// let soma = 0;

// numeros.forEach(numeros => {
//     console.log(numeros * 2);
//     soma += numeros;
// });

// console.log(soma);

// let nome = 'Chagas';
// let idade = 20;
// let sexo = 'Masculino';

// let objeto = {
//     nome,
//     idade,
//     sexo
// }

// console.log(objeto);

// let BicicletaFactory = function (cor, tipo, marca) {
//     return {
//         cor,
//         tipo,
//         marca
//     }
// }

// const prompt = require('prompt-sync')();

// let cor = prompt('Escreva a cor: ');

// let bicileta01 = BicicletaFactory(cor, 'Speed', 'Caloi');
// let bicileta02 = BicicletaFactory('Preta', 'Mountain', 'BMX');

// console.log(bicileta01);
// console.log(bicileta02);