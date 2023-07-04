// Testar se o fatorial de um número é primo. 

let numero = 5;
let i = 1;
let resultado = 1;

do {
    resultado *= i;
    i++;
} while (i <= numero);
console.log(numero + " fatorial é igual a: " + resultado);


let j = 0;
let nDivisores = 0;

do {
    j++;
    if (resultado % j == 0) {
        nDivisores++
    }
} while (j < resultado);
console.log(resultado + " possui: " + nDivisores + " divisores");

if (nDivisores == 2) {
    console.log('primo');
} else {
    console.log('composto');
}