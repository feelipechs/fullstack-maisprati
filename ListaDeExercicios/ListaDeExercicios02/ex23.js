function matrizIdentidade() {
    const M = [];

    for (let i = 0; i < 7; i ++) {
        M[i] = [];
        for (let j = 0; j < 7; j ++ ) {
            M[i][j] = 0;
        }
    }

    for (let i = 0; i < 7; i ++) {
        M[i][i] = 1;
    }

    for (let i = 0; i < 7; i ++) {
        console.log(M[i].join(" "));
    }
}

matrizIdentidade();