const prompt = require('prompt-sync')();

const jokenpo = {
        1: "Pedra",
        2: "Papel",
        3: "Tesoura"
}

console.log("1) Pedra\n2) Papel\n3) Tesoura");

let pontosComputador = 0;
let pontosUsuario = 0;
let tentativas = 0;

while (tentativas < 5) {
    let palpiteComputador = Math.floor(Math.random() * 3) + 1;
    let palpiteUsuario = parseInt(prompt("Sua vez: "));

    console.log("-".repeat(50));
    console.log("Computador escolhe:", jokenpo[palpiteComputador] + "\n");
    console.log("Você escolhe:", jokenpo[palpiteUsuario] + "\n");

    if ((palpiteUsuario === 1 && palpiteComputador === 3) ||
        (palpiteUsuario === 2 && palpiteComputador === 1) ||
        (palpiteUsuario === 3 && palpiteComputador === 2)) {
        console.log("Vencedor da rodada: usuário");
        console.log("-".repeat(50));
            pontosUsuario ++;
    } else if (palpiteUsuario === palpiteComputador) {
        console.log("Empate");
        console.log("-".repeat(50));
    } else {
        console.log("Vencedor da rodada: computador");
        console.log("-".repeat(50));
            pontosComputador ++;
    }

    tentativas ++;
}

console.log("-".repeat(50));
console.log("Pontuação final:");
console.log("Usuário:", pontosUsuario);
console.log("Computador:", pontosComputador);
console.log("-".repeat(50));