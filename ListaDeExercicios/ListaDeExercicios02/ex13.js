function Fibonacci2() {
    let sequencia = [1, 1];
  
    for (let i = 1; i <= 13; i ++) {
        let x = sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
        sequencia.push(x);
    }

    console.log(sequencia);
}
  
Fibonacci2();