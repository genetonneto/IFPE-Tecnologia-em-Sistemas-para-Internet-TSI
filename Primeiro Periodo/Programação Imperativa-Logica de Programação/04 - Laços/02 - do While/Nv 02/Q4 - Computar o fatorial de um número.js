// Computar o fatorial de um número;

let numero = 5;
let contador = 1;
let resultado = 1;

do {
    contador++;
    resultado *= contador;
} while (contador < numero);
console.log(resultado)