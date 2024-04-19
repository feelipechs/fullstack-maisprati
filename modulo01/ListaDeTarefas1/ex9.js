// CÓDIGO DE ORIGEM DE PRODUTOS

const prompt = require('prompt-sync')();

let codigo = parseInt(prompt('Insira o código de origem do produto: '));

switch (true) {
    case codigo == 1:
        console.log('Região Sul');
        break;
    case codigo == 2:
        console.log('Região Norte');
        break;
    case codigo == 3:
        console.log('Região Leste');
        break;
    case codigo == 4:
        console.log('Região Oeste');
        break;
    case codigo <= 6:
        console.log('Região Nordeste');
        break;
    case codigo <= 9:
        console.log('Região Sudeste');
        break;
    case codigo <= 20:
        console.log('Região Centro-Oeste');
        break;
    case codigo >= 25 && codigo <= 50:
        console.log('Região Nordeste');
        break;
    default:
        console.log('Produto importado');
}