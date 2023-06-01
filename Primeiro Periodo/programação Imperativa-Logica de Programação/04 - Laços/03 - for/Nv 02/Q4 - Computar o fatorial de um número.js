// Computar o fatorial de um número;

let numero = 5;
let resultado = 1;

for (let i = 1; i < numero; resultado *= i) {
    i++;
}
console.log(resultado);