// PAR OU ÍMPAR

const prompt = require('prompt-sync')();

while (true) {
    let valor = prompt('Insira um número ou "sair" para encerrar: ');

    if (valor.toLowerCase() === "sair") {
        break;
    }

    valor = parseInt(valor);

    if (isNaN(valor) || valor < 0) {
        break;
    }

    if (valor % 2 === 0) {
        console.log('PAR!');
    } else {
        console.log('ÍMPAR!');
    }
}