const prompt = require('prompt-sync')();

function loteriaEsportiva() {
    const gabarito = [];

    for (let i = 0; i < 13; i ++) {
        let valoresGabarito = parseInt(prompt(`Insira ${i + 1}º valor para o gabarito: `));
        gabarito.push(valoresGabarito);
    }

    for (let i = 1; i <= 100; i ++) {
        const apostador = {
            numero: i,
            aposta: []
        }

        console.log(`Apostador: cartão #${i}`);

        for (let j = 0; j < 13; j ++) {
            let valores = parseInt(prompt(`Insira o ${j + 1}º valor: `));
            apostador.aposta.push(valores);
        }

        let acertos = 0;
        let numerosJaContados = [];

        for (let k = 0; k < 13; k ++) {
            for (let l = 0; l < 13; l ++) {
                if (apostador.aposta[k] === gabarito[l] && !numerosJaContados.includes(l)) {
                    acertos ++;
                    numerosJaContados.push(l);
                    break;
                }
            }
        }

        console.log(`Apostador #${apostador.numero} teve ${acertos} acertos.`);
        if (acertos === 13) {
            console.log("Parabéns, você foi o GANHADOR!");
        }
    }
}

loteriaEsportiva();