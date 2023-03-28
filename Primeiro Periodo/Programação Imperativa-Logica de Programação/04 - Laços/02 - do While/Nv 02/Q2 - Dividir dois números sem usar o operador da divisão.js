// Dividir dois números sem usar o operador da divisão (Dica: 9/3 = 9 - 3 - 3 - 3);

let numero = 4;
let divisor = 4;
let contador = 0;

do {
    numero = numero - divisor;
    contador++
} while (numero >= divisor);
console.log(contador);