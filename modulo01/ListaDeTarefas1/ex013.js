// 1 ATÉ N

const prompt = require('prompt-sync')();

let N = parseInt(prompt('Insira o multiplicador: '));

for (let i = 1; i <= 5; i++) {
    console.log(`${i} x ${N} = ${N * i}`);
}