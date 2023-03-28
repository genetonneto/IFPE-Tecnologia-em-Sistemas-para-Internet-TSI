// Computar o fatorial de um número;

let numero = 6;
let resultado = 1;
let contador = 1;

while (contador < numero) {
    resultado *= contador;
    contador++
    console.log(contador + "x" + resultado);
}
