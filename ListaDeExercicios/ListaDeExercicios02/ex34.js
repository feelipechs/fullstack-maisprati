function multiplicacoesNaMatriz() {
    const M = [];
    for (let i = 0; i < 50; i ++) {
        M[i] = [];
        for (let j = 0; j < 50; j ++) {
            M[i][j] = Math.floor(Math.random() * 21) - 10;
        }
    }

    console.log("Matriz M:");
    for (let i = 0; i < M.length; i ++) {
        console.log(M[i].join("\t"));
    }

    const N = [];

    for (let i = 0; i < 50; i ++) {
        N[i] = [];
        for (let j = 0; j < 50; j ++) {
            N[i][j] = M[i][j] * M[i][i];
        }
    }

    console.log("\nNova matriz:");
    for (let i = 0; i < 50; i ++) {
        console.log(N[i].join("\t"));
    }
}

multiplicacoesNaMatriz();