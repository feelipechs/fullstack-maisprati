// PERCENTUAL DE VOTOS

const prompt = require('prompt-sync')();

let eleitores = parseInt(prompt('Quantidade de eleitores: '));
let votoBranco = parseInt(prompt('Quantidade de votos brancos: '));
let votoNulo = parseInt(prompt('Quantidade de votos nulos: '));
let votoValido = parseInt(prompt('Quantidade de votos válidos: '));

console.log(`Total de eleitores: ${eleitores} \nVotos brancos: ${(votoBranco / eleitores) * 100}%\nVotos nulos: ${(votoNulo / eleitores) * 100}% \nVotos válidos: ${(votoValido / eleitores) * 100}%`)
