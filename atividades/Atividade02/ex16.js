function numerosAleatorios() {
    let numeros = [];
    
    for (let i = 1; i <= 20; i ++) {
        let numero = Math.floor(Math.random() * (100 - 0) + 0);
        numeros.push(numero);
    }
    
    let novosNumeros = numeros.slice();
    novosNumeros.sort((a, b) => a - b);
    console.log(`Ordem gerada: ${numeros}\nOrdem crescente: ${novosNumeros}`);
}
  
numerosAleatorios();