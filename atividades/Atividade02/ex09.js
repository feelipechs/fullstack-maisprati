const prompt = require('prompt-sync')();

function salarioTotal() {
    let homens = 0;
    let mulheres = 0;
    
    while(true) {
        let sexo = prompt("Insira o sexo do funcionário (M/F) ").toUpperCase();
        let salario = parseFloat(prompt("Insira o salário do funcionário: "));
    
        if (sexo === 'M') {
            homens += salario;
        } else if (sexo === 'F') {
            mulheres += salario;
        }
    
        let interromper = prompt("Deseja adicionar outro funcionário? (S/N) ");
        if (interromper.toUpperCase() === 'N') {
            break;
        }
    }
    
    console.log("-".repeat(50));
    console.log(`Salário total dos homens: R$${homens.toFixed(2)}\nSalário total das mulheres: R$${mulheres.toFixed(2)}`);
    console.log("-".repeat(50));
}

salarioTotal();