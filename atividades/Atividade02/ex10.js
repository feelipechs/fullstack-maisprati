const prompt = require('prompt-sync')();

function lerNumeros() {
    let continuar;
    let numeros = [];
    let numerosPares = [];
    let soma = 0;
    let contador = 0;

    do {
        let numero = parseFloat(prompt("Insira um número: "));
            numeros.push(numero);

            soma += (numero);
            contador ++;

            if (numero % 2 === 0) {
                numerosPares.push(numero);
            }

        continuar = prompt("Deseja continuar? (S/N)").toLowerCase();
    } while (continuar === 's');

    numeros.sort((a, b) => a - b);

    console.log("-".repeat(50));
    console.log(`Soma dos valores: ${soma} \nMenor valor digitado: ${numeros[0]}\nMédia dos valores: ${soma / contador}\nValores pares: ${numerosPares.length}`);
    console.log("-".repeat(50));
}

lerNumeros();