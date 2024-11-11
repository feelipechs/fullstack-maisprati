// CONVERSOR CELSIUS PARA FAHRENHEIT

const prompt = require('prompt-sync')();

let celsius = prompt('Insira a temperatura em ºCelsius que deseja converter: ');
let fahrenheit = celsius * 1.8 + 32

console.log(`${celsius}ºC equivalem a ${fahrenheit}ºF`)
