const prompt = require('prompt-sync')();

function numerosPares() {
    let numeros = [];
    let numerosPares = [];
    let indice = [];

    for (let i = 1; i <= 10; i ++) {
        let numero = parseFloat(prompt(`Insira o ${i}º valor: `));
        numeros.push(numero);

        if (numero % 2 === 0) {
            numerosPares.push(numero);
            indice.push(i - 1);
        }
    }

    console.log("-".repeat(50));
    console.log(`Valores inseridos: ${numeros}\nValores pares: ${numerosPares}\nÍndice dos pares: ${indice}`);
    console.log("-".repeat(50));
}

numerosPares();