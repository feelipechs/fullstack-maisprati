// Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
// contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
// e os vetores criados.
function matrizLinhasColunas() {
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

    const SL = new Array(5).fill(0);
    const SC = new Array(5).fill(0);

    for (let i = 0; i < 5; i ++) {
        for (let j = 0; j < 5; j ++) {
            SL[i] += M[i][j];
            SC[j] += M[i][j];
        }
    }

    console.log(`\nSoma das linhas: ${SL}\nSoma das colunas: ${SC}`);
}

matrizLinhasColunas();