const prompt = require('prompt-sync')();

function diasPerdidosFumante() {
    let cigarros = parseInt(prompt("Insira quantos cigarros você fuma por dia: "));
    let anos = parseInt(prompt("Há quantos anos você fuma? "));

    let totalCigarros = (anos * 365) * cigarros;
    let tempoPerdido = (totalCigarros * 10) / 1440;

    console.log(`Você perdeu ${tempoPerdido.toFixed(0)} dias de vida devido ao cigarro.`);
}

diasPerdidosFumante();