function matrizElementosDiagonais() {
    const M = [];
    for (let i = 0; i < 3; i ++) {
        M[i] = [];
        for (let j = 0; j < 3; j ++) {
            M[i][j] = Math.floor(Math.random() * 21) - 10;
        }
    }

    console.log("Matriz M:");
    for (let i = 0; i < M.length; i ++) {
        console.log(M[i].join("\t"));
    }

    const N = [];
    let diagonalSecundaria = 1;
    let somaDiagonalSecundaria = 0;

    for (let i = 0; i < 3; i ++) {
        diagonalSecundaria *= M[i][i];
        somaDiagonalSecundaria += M[i][2 - i];
    }

    const media = somaDiagonalSecundaria / 3;

    for (let i = 0; i < 3; i ++) {
        N[i] = [];
        for (let j = 0; j < 3; j ++) {
            if (i === j) {
                N[i][j] = (M[i][j] * media).toFixed(2);
            } else {
                N[i][j] = M[i][j];
            }
        }
    }

    console.log("\nNova matriz:");
    for (let i = 0; i < 3; i ++) {
        console.log(N[i].join("\t"));
    }
}

matrizElementosDiagonais();