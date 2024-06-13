const prompt = require('prompt-sync')();

function formarTriangulo() {
    let valores = [];

    for (let i = 1; i <= 3; i++) {
        let valor = parseFloat(prompt(`Insira o ${i}º valor: `));
        valores.push(valor);
    }

    let [a, b, c] = valores;

    if (a + b > c && a + c > b && b + c > a) {
        console.log("É possível formar um triângulo com esses valores.");
    } else {
        console.log("Não é possível formar um triângulo com esses valores.");
    }
}

formarTriangulo();