// Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
// repetição. Escrever cada um deles no formato HH.MM.SS.
const prompt = require('prompt-sync')();

function lerHorarios() {
    let horarios = [];
    let contador = 0;

    while (contador < 5) {
        let hora = parseInt(prompt("Horas: "));
        let minuto = parseInt(prompt("Minutos: "));
        let segundo = parseInt(prompt("Segundos: "));

        if (hora < 0 || hora > 23 || minuto < 0 || minuto > 59 || segundo < 0 || segundo > 59) {
            console.log("Horário inválido, tente novamente");
            continue;
        } else {
            let horaFormatada = hora < 10 ? '0' + hora : hora;
            let minutoFormatado = minuto < 10 ? '0' + minuto : minuto;
            let segundoFormatado = segundo < 10 ? '0' + segundo : segundo;

            horarios.push({ hora: horaFormatada, minuto: minutoFormatado, segundo: segundoFormatado });
            contador ++;
        }
    }

    console.log("Horários inseridos:");
    for (let horario of horarios) {
        console.log(`${horario.hora}:${horario.minuto}:${horario.segundo}`);
    }
}

lerHorarios();