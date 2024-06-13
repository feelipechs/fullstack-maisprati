const prompt = require('prompt-sync')();

function numeroAleatorio() {
    let numero = Math.floor(Math.random() * 5) + 1;
    let tentativas = 1;

    while (tentativas <= 3) {
        let palpite = parseInt(prompt("Insira o palpite do valor de 1 a 5: "));    
        if (palpite === numero) {
            console.log(`Você acertou! Era o número ${numero}.`);
            break;
        } else {
            tentativas ++;
        }
    }

    if (tentativas > 3) {
        console.log(`Você não acertou. Era o número ${numero}.`);
    }
}

numeroAleatorio();