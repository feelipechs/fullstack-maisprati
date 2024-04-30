// EXERCITANDO ARRAYS E FUNÇÕES

// Exercício 1: Somar todos os elementos de um array

// let elementos = [1, 2, 3, 4];

// function somaElementos(vetor) {
//     let soma = 0;
//     for (let i = 0; i < vetor.length; i++) {
//         soma += vetor[i];
//     }
//     return soma
// }
// console.log('A soma dos elementos é: ', somaElementos(elementos));

// Exercício 2: Encontrar o maior número em um Array

// function maiorNum(vetor) {
//     let maior = vetor[0];
//     for (let i = 1; i < vetor.length; i++) {
//         if (vetor[i] > maior) {
//             maior = vetor[i];
//         }
//     }
//     return maior
// }

// console.log('Dentre os elementos o maior é: ', maiorNum([1, 10, 100, 70]));

// Exercício 3: reverter um array

// function reverterArray(vetor) {
//     let vetorResultado = [];
//     for (let i = vetor.length -1; i >= 0; i--) {
//         vetorResultado.push(vetor[i]);
//     }
//     return vetorResultado
// }

// console.log('O vetor invertido é: ', reverterArray([1, 2, 3, 4]));

// Exercício 4: Somar todos os elementos de uma matriz

// function somaMatriz(matriz) {
//     let soma = 0;
//     for (let i = 0; i < matriz.length; i++) {
//         for (let j = 0; j < matriz[i].length; j++) {
//             soma += matriz[i][j];
//         }
//     }

//     return soma
// }

// console.log('A soma dos elementos contidos na nossa matriz é: ', somaMatriz([[1, 2], [3, 4]]));

// Exercício 5: Encontrar o maior número em uma matriz

// function maiorNumMatriz(matriz) {
//     let maior = matriz[0][0];
//     for (let i = 0; i < matriz.length; i++) {
//         for (let j = 0; j < matriz[i].length; j++) {
//             if (matriz[i][j] > maior) {
//                 maior = matriz[i][j];
//             }
//         }
//     }
//     return maior
// }

// console.log('O maior número da minha matriz é: ', maiorNumMatriz([[1, 2], [3, 4]]));

// Funções avançadas: String

/*
    String é considerado um valor primitivo, porém, ao ser interpretado o JS os converte em objetos, possuindo propriedades e métodos.
*/

// let nome = 'Dick Vigarista';
// console.log(nome.substr('7', '5'));

// Funções avançadas: Matemáticas

// let x = Math.random();
// console.log(x);

// Funções avançadas: Datas

// let data = new Date();

// // console.log(`Data de hoje: ${data.getDate()}/${data.getMonth() +1}/${data.getFullYear()}`);

// console.log(data.toString());
// data.setDate(data.getFullYear() + 5);
// console.log(data.toString());
