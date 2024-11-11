function elementosNegativosMatriz() {
    const M = [];

    for (let i = 0; i < 6; i ++) {
        M[i] = [];
        for (let j = 0; j < 8; j ++) {
            M[i][j] = Math.floor(Math.random() * 21) - 10;
        }
    }

    console.log("Matriz M:");
    for (let i = 0; i < 6; i ++) {
        console.log(M[i].join("\t"));
    }

    const C = [];

    for (let i = 0; i < 6; i ++) {
        let contadorNegativos = 0;
        for (let j = 0; j < 8; j ++) {
            if (M[i][j] < 0) {
                contadorNegativos ++;
            }
        }
        C[i] = contadorNegativos;
    }

    console.log("Vetor C (quantidade de elementos negativos por linha):");
    console.log(C);
}

elementosNegativosMatriz();