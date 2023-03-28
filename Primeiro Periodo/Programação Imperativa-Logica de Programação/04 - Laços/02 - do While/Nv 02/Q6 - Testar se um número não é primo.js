// Testar se um número não é primo

let numero = 48;
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