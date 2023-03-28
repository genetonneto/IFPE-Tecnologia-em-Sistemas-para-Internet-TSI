// Multiplicar dois números sem usar o operador da multiplicação (Dica: 5x3 = 5 + 5 + 5);

// Implemente um programa capaz de multiplicar dois números sem usar o operador da multiplicação;

let n1 = 8;
let n2 = 9;
let resultado = 0;
let contador = 0;

do {
    resultado = resultado + n1;
    contador++;
} while (contador < n2);
console.log(resultado)