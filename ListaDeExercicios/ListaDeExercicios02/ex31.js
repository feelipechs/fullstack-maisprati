const prompt = require('prompt-sync')();

function valoresDiferentes() {
    let A = parseInt(prompt("Insira um valor: "));
    let contadorIguais = 0;

    const M = [];
    for (let i = 0; i < 30; i ++) {
        M[i] = [];
        for (let j = 0; j < 30; j ++) {
            M[i][j] = Math.floor(Math.random() * 21) - 10;
            if (M[i][j] === A) {
                contadorIguais++;
            }
        }
    }

    console.log("Matriz M:");
    for (let i = 0; i < M.length; i ++) {
        console.log(M[i].join("\t"));
    }

    const X = [];
    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 30; j++) {
            if (M[i][j] !== A) {
                X.push(M[i][j]);
            }
        }
    }

    console.log(`\n${contadorIguais} valores iguais ao inserido (${A})`);

    console.log("\nMatriz X (valores diferentes de A):");
    for (let i = 0; i < X.length; i += 30) {
        console.log(X.slice(i, i + 30).join("\t"));
    }
}

valoresDiferentes();