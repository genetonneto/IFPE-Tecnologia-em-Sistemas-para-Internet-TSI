// Testar se um número é primo

let numero = 47;
let nDivisores = 0;
let contador = 0;

do {
    contador++;
    if (numero % contador == 0) {
        nDivisores++;
    }
} while (contador < numero);
console.log(nDivisores);

if (nDivisores == 2) {
    console.log('primo');
} else {
    console.log('composto');
}