function somaColunasMatriz() {
    const M = [];

    for (let i = 0; i < 15; i ++) {
        M[i] = [];
        for (let j = 0; j < 20; j ++) {
            M[i][j] = Math.floor(Math.random() * 21) - 10;
        }
    }

    console.log("Matriz M:");
    for (let i = 0; i < 15; i ++) {
        console.log(M[i].join("\t"));
    }

    const C = [];

    for (let j = 0; j < 20; j ++) {
        let somaColuna = 0;
        for (let i = 0; i < 15; i ++) {
            somaColuna += M[i][j];
        }
        C[j] = somaColuna;
    }

    console.log("Soma das colunas:");
    console.log(C);
}

somaColunasMatriz();