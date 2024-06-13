const prompt = require('prompt-sync')();

function lerDadosFuncionario() {
    let funcionario = {
        nome: "",
        cargo: "",
        salario: ""
    }

    funcionario.nome = prompt("Nome: ");
    funcionario.cargo = prompt("Cargo: ");
    funcionario.salario = parseFloat(prompt("Salario: "));

    console.log("Dados do funcionário:");
    console.log(`Nome: ${funcionario.nome}\nCargo: ${funcionario.cargo}\nSalário: ${funcionario.salario.toFixed(2)}`);
}

lerDadosFuncionario();