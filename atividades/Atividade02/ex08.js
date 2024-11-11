const prompt = require('prompt-sync')();

function atividadesFisicas() {
    let pontos = 0;
    let horasAtividade = parseInt(prompt("Insira a quantidade de horas de atividade realizadas no mês: "));
    
    switch (true) {
        case horasAtividade <= 10:
            pontos += (2 * horasAtividade);
                break;
        case horasAtividade <= 20:
            pontos += (5 * horasAtividade);
                break;
        case horasAtividade > 20:
            pontos += (10 * horasAtividade);
                break;
    }
    
    console.log(`Valor a receber: R$${(pontos * 0.05).toFixed(2)}`);
}

atividadesFisicas();