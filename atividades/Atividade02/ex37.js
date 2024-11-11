// Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
// o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
// respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
// aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
// e mostre uma mensagem de “REPROVADO”, caso contrário.
const prompt = require('prompt-sync')();

function notaAluno() {
    const gabarito = [];

    for (let i = 0; i < 20; i ++) {
        let valoresGabarito = parseInt(prompt(`Insira ${i + 1}º valor para o gabarito: `));
        gabarito.push(valoresGabarito);
    }

    for (let i = 1; i <= 50; i ++) {
        const aluno = {
            numero: i,
            respostas: []
        }

        console.log(`Aluno #${i}`);

        for (let j = 0; j < 20; j ++) {
            let resposta = parseInt(prompt(`Insira o ${j + 1}º valor: `));
            aluno.respostas.push(resposta);
        }

        let acertos = 0;
        let numerosJaContados = [];

        for (let k = 0; k < 20; k ++) {
            for (let l = 0; l < 20; l ++) {
                if (aluno.respostas[k] === gabarito[l] && !numerosJaContados.includes(l)) {
                    acertos ++;
                    numerosJaContados.push(l);
                    break;
                }
            }
        }

        console.log(`Aluno #${aluno.numero} teve ${acertos} acertos.`);
        if (acertos >= 12) {
            console.log("APROVADO");
        } else {
            console.log("REPROVADO");
        }
    }
}

notaAluno();