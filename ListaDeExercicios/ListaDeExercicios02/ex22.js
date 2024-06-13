const prompt = require('prompt-sync')();

function pesquisaPrefeitura() {
    let contadorSalario = 0;
    let contadorFilhos = 0;
    let pessoas = 0;
    let maiorSalario = 0;
    let menorQue350 = 0;
    
    while(true) {
        let salario = parseFloat(prompt("Insira o salário da pessoa: "));
        let filhos = parseInt(prompt("Insira a quantia de filhos: "));
    
        contadorSalario += salario;
        contadorFilhos += filhos;
        pessoas ++;

        if (salario > maiorSalario) {
            maiorSalario = salario;
        }

        if (salario <= 350) {
            menorQue350 ++;
        }

        let interromper = prompt("Deseja adicionar outra pessoa? (S/N) ");
        if (interromper.toUpperCase() === 'N') {
            break;
        }
    }
    
    let mediaSalario = contadorSalario / pessoas;
    let mediaFilhos = contadorFilhos / pessoas;
    let percentualMenorQue350 = (menorQue350 / pessoas) * 100;

    console.log(`Salário médio da população: R$${mediaSalario.toFixed(2)}\nMédia do número de filhos: ${mediaFilhos.toFixed(0)}\nMaior salário: R$${maiorSalario.toFixed(2)}\nPercentual de pessoas com salário até R$350: ${percentualMenorQue350.toFixed(2)}%`);
}

pesquisaPrefeitura();
