const prompt = require('prompt-sync')();

function valoresMatrizMultiplicados() {
    let A = parseFloat(prompt("Insira um valor: "));

    const M = [];
    for (let i = 0; i < 6; i ++) {
        M[i] = [];
        for (let j = 0; j < 6; j ++) {
            M[i][j] = Math.floor(Math.random() * 21) - 10;
        }
    }

    console.log("Matriz M:");
    for (let i = 0; i < M.length; i ++) {
        console.log(M[i].join("\t"));
    }

    const V = []
    for (let i = 0; i < 6; i ++) {
        for (let j = 0; j < 6; j ++) {
            V.push(M[i][j] * A);
        }
    }

    console.log("\nVetor V:");
    console.log(V);
}

valoresMatrizMultiplicados();