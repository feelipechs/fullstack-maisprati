const prompt = require('prompt-sync')();

function resultadoLoto() {
    const resultadoOficial = [];

    for (let i = 0; i < 5; i ++) {
        let valoresOficiais = parseInt(prompt(`Insira o ${i + 1}º valor para o resultado oficial: `));
        resultadoOficial.push(valoresOficiais);
    }

    for (let i = 1; i <= 5; i ++) {
        const apostador = {
            numero: i,
            aposta: []
        }

        console.log(`Apostador: cartão #${i}`);

        for (let j = 0; j < 5; j ++) {
            let valores = parseInt(prompt(`Insira o ${j + 1}º valor: `));
            apostador.aposta.push(valores);
        }

        let acertos = 0;
        let numerosJaContados = [];

        for (let k = 0; k < 5; k ++) {
            for (let l = 0; l < 5; l ++) {
                if (apostador.aposta[k] === resultadoOficial[l] && !numerosJaContados.includes(l)) {
                    acertos ++;
                    numerosJaContados.push(l);
                    break;
                }
            }
        }

        console.log(`Apostador #${apostador.numero} teve ${acertos} acertos.`);
        if (acertos === 5) {
            console.log("Ganhador!");
        }
    }
}

resultadoLoto();