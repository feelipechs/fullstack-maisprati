function somasNaMatriz() {
    const M = [];
    for (let i = 0; i < 5; i ++) {
        M[i] = [];
        for (let j = 0; j < 5; j ++) {
            M[i][j] = Math.floor(Math.random() * 21) - 10;
        }
    }

    console.log("Matriz M:");
    for (let i = 0; i < M.length; i ++) {
        console.log(M[i].join("\t"));
    }

    let somaA = 0;
    let somaB = 0;
    let somaC = 0;
    let somaD = 0;

    for (let j = 0; j < 5; j ++) {
        somaA += M[3][j];
    }

    for (let i = 0; i < 5; i ++) {
        somaB += M[i][1];
    }

    for (let i = 0; i < 5; i ++) {
        somaC += M[i][i];
        for (let j = 0; j < 5; j ++) {
            somaD += M[i][j];
        }
    }

    console.log(`\nSoma da linha 4: ${somaA}\nSoma da coluna 2: ${somaB}\nSoma da diagonal principal: ${somaC}\nSoma total da matriz: ${somaD}`);
}

somasNaMatriz();