const prompt = require('prompt-sync')();

function processarFolhaPagamento() {
    for (let i = 1; i <= 80; i ++) {
        console.log(`Funcionário #${i}`);
        
        let matricula = prompt("Matrícula: ");
        let nome = prompt("Nome: ");
        let salarioBruto = parseFloat(prompt("Salário Bruto: "));

        let deducaoINSS = salarioBruto * 0.12;
        let salarioLiquido = salarioBruto - deducaoINSS;

        console.log(`Matrícula: ${matricula}`);
        console.log(`Nome: ${nome}`);
        console.log(`Salário Bruto: ${salarioBruto.toFixed(2)}`);
        console.log(`Dedução INSS: ${deducaoINSS.toFixed(2)}`);
        console.log(`Salário Líquido: ${salarioLiquido.toFixed(2)}`);

        console.log("-".repeat(50));
    }
}

processarFolhaPagamento();
