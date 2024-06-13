function multiplicacaoMatriz() {
    const A = []
    for (let i = 0; i < 3; i ++) {
        A[i] = [];
        for (let j = 0; j < 5; j ++) {
            A[i][j] = Math.floor(Math.random() * 21) - 10;
        }
    }

    console.log("Matriz A:");
    for (let i = 0; i < 3; i ++) {
        console.log(A[i].join("\t"));
    }

    const B = []
    for (let i = 0; i < 5; i ++) {
        B[i] = [];
        for (let j = 0; j < 3; j ++) {
            B[i][j] = Math.floor(Math.random() * 21) - 10;
        }
    }

    console.log("\nMatriz B:");
    for (let i = 0; i < 5; i ++) {
        console.log(B[i].join("\t"));
    }

    const P = []
    for (let i = 0; i < A.length; i ++) {
        P[i] = [];
        for (let j = 0; j < B[0].length; j ++) {
            P[i][j] = 0;
            for (let k = 0; k < A[0].length; k ++) {
                P[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    console.log("\nMatriz produto P:");
    for (let i = 0; i < 3; i ++) {
        console.log(P[i].join("\t"));
    }
}

multiplicacaoMatriz();