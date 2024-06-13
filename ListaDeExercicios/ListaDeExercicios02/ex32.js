function matrizElementosDivididos() {
    const M = [];
    for (let i = 0; i < 12; i ++) {
        M[i] = [];
        for (let j = 0; j < 13; j ++) {
            M[i][j] = Math.floor(Math.random() * 21) - 10;
        }
    }

    console.log("Matriz M:");
    for (let i = 0; i < M.length; i ++) {
        console.log(M[i].join("\t"));
    }

    const N = [];

    for (let i = 0; i < 12; i ++) {
        N[i] = [];
        let maiorNumero = 0;

        for (let j = 0; j < 13; j ++) {
            if (Math.abs(M[i][j]) > Math.abs(maiorNumero)) {
                maiorNumero = M[i][j];
            }
        }

        for (let j = 0; j < 13; j ++) {
            N[i][j] = (M[i][j] / Math.abs(maiorNumero)).toFixed(2);
        }
    }

    console.log("\nMatriz modificada:");
    for (let i = 0; i < 12; i ++) {
        console.log(N[i].join("\t"));
    }
}

matrizElementosDivididos();