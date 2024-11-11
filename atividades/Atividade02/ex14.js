const prompt = require('prompt-sync')();

function lerInverso() {
    let nomes = [];

    for (let i = 1; i <= 7; i ++) {
        let nome = prompt(`Insira o ${i}° nome: `);
        nomes.push(nome);
    }
    
    nomes.reverse();
    
    console.log(nomes);
}
  
lerInverso();