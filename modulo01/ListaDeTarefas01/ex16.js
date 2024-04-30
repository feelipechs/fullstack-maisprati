// NÚMEROS PRIMOS 

let num = 100;
let contador = 0;

while (contador < 50) {
    let numPrimo = true;
    
    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            numPrimo = false;
            break;
        }
    }
    
    if (numPrimo) {
        console.log(num);
        contador++;
    }
    
    num++;
}