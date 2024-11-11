function valoresDiagonal() {
    const M = [];
    for (let i = 0; i < 10; i ++) {
        M[i] = [];
        for (let j = 0; j < 10; j ++) {
            M[i][j] = Math.floor(Math.random() * 21) - 10;
        }
    }

    console.log("Matriz M:");
    for (let i = 0; i < M.length; i ++) {
        console.log(M[i].join("\t"));
    }

    let somaAcima = 0;
    let somaAbaixo = 0;

    for (let i = 0; i < 10; i ++) {
        for (let j = 0; j < 10; j ++) {
            if (j > i) {
                somaAcima += M[i][j];
            } else if (i > j) {
                somaAbaixo += M[i][j];
            }
        }
    }

    console.log(`\nSoma acima da diagonal principal: ${somaAcima}\nSoma abaixo da diagonal principal: ${somaAbaixo}`);
}

valoresDiagonal();