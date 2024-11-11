const prompt = require ('prompt-sync')();

function valoresEmVetores() {
    const numerosPares = [];
    const numerosImpares = [];

    for (let i = 1; i <= 30; i ++) {
        let valor = parseInt(prompt(`Insira o ${i}º valor: `));
        if (valor % 2 === 0) {
            numerosPares.push(valor);
            if (numerosPares.length === 5) {
                console.log(`Vetor de pares: ${numerosPares}`);
                numerosPares.length = 0;
            }
        } else if (valor % 2 !== 0) {
            numerosImpares.push(valor);
            if (numerosImpares.length === 5) {
                console.log(`Vetor de ímpares: ${numerosImpares}`);
                numerosImpares.length = 0;
            }
        }
    } 

    if (numerosPares.length > 0) {
        console.log(`Vetor de pares: ${numerosPares}`);
    }

    if (numerosImpares.length > 0) {
        console.log(`Vetor de ímpares: ${numerosImpares}`);
    }
}

valoresEmVetores();