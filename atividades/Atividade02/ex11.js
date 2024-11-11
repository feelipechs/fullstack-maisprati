const prompt = require('prompt-sync')();

function progressaoAritmetica() {
    let pA = [];
    let soma = 0;
    let primeiroTermo = parseFloat(prompt("Insira o primeiro termo: "));
    let razao = parseFloat(prompt("Insira a razão: "));

    for (let i = 1; i <= 10; i ++) {
        pA.push(primeiroTermo);
        soma += primeiroTermo;
        primeiroTermo += razao;
    }

    console.log("-".repeat(50));
    console.log(`Progressão Aritmética: ${pA}\nSoma dos valores: ${soma}`);
    console.log("-".repeat(50));
}

progressaoAritmetica();