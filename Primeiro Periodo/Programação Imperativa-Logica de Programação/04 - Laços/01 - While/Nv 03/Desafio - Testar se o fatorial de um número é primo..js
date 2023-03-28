// Testar se o fatorial de um número é primo. 

let numero = 6;
let resultado = 1;
let i = 1;

while (i < numero) {
    resultado *= i;
    i++;
}
console.log(resultado);

let nDivisores = 0;
let j = 0;

while (j <= resultado) {
    j++;
    
    if (resultado % j == 0) {
        nDivisores++;
    }
}
console.log(nDivisores);

if (nDivisores == 2) {
    console.log('primo');
} else {
    console.log('composto');
}