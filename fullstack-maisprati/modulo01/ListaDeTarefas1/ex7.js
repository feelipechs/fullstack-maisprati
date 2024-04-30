// VALOR MAÇÃS

const prompt = require('prompt-sync')();

let maca = parseInt(prompt('Insira o total de maçãs desejadas: '))

valorMaca = 0.30

if (maca >= 12) {
    console.log(`O valor gasto em ${maca} maçãs foi de R$${(valorMaca - 0.05) * maca}`)
} else {
    console.log(`O valor gasto em ${maca} maçãs foi de R$${valorMaca * maca}`)
}