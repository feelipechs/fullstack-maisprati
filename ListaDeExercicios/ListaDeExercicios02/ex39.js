const prompt = require('prompt-sync')();

function valoresPositivos() {
    const A = [];
    const B = [];

    for (let i = 0; i < 100; i ++) {
        let valores = parseFloat(prompt(`Insira o ${i + 1}º valor: `));
        A.push(valores);

        if (valores > 0) {
            B.push(valores);
        }
    }

    console.log(`Vetor compactado: ${B}`);
}

valoresPositivos();