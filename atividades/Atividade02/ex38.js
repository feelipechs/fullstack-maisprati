const prompt = require('prompt-sync')();

function manipulacaoElementos() {
    const vetor = [];
    let soma = 0;

    for (let i = 0; i < 6; i ++) {
        let valores = parseFloat(prompt(`Insira o ${i + 1}º valor: `));
        vetor.push(valores);
        soma += valores;
    }

    console.log("Escolha uma opção:\n1) Soma dos elementos\n2) Produto dos elementos\n3) Média dos elementos\n4) Ordenar os elementos crescentemente\n5) Imprimir o vetor");
    let opcao = parseInt(prompt("Opção desejada: "));

    if (opcao === 1) {
        console.log(`Soma dos elementos: ${soma}`);
    } else if (opcao === 2) {
        let produto = 1;
        for (let i = 0; i < vetor.length; i ++) {
            produto *= vetor[i];
        }
        console.log(`Produto dos elementos: ${produto}`);
    } else if (opcao === 3) {
        console.log(`Média dos elementos: ${(soma / vetor.length).toFixed(2)}`);
    } else if (opcao === 4) {
        vetor.sort((a, b) => a - b);
        console.log(`Elementos ordenados: ${vetor}`);
    } else if (opcao === 5) {
        console.log(`Vetor: ${vetor}`);
    } else {
        console.log("Opção inválida!");
    }
}

manipulacaoElementos();