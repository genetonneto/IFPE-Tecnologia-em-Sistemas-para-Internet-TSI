// Implementar um programa que testa se o fatorial de um número é primo;

let numero = 5;
let resultado = 1;

for (i = 1; i < numero; resultado *= i) {
    i++;
    
}
console.log(resultado);


let nDivisores;

for (j = 0; j < resultado; j++) {
    if (resultado % j == 0) {
        nDivisores++;
    }
}

if (nDivisores == 2) {
    console.log('primo');
} else {
    console.log('composto');
}