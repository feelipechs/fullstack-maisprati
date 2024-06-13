const prompt = require('prompt-sync')();

function menoresDeIdade() {
    let pessoas = [];

    for (let i = 1; i <= 9; i ++) {
        const pessoa = {
            nome: "",
            idade: ""
        }

        pessoa.nome = prompt("Insira seu nome: ");
        pessoa.idade = parseInt(prompt("Insira sua idade: "));

        if (pessoa.idade < 18) {
            pessoas.push(pessoa);
        }
    }

    console.log("Dados das pessoas menores de idade:");
    for (let pessoa of pessoas) {
        console.log(`${pessoa.nome}, ${pessoa.idade} anos`);
    }
}

menoresDeIdade();