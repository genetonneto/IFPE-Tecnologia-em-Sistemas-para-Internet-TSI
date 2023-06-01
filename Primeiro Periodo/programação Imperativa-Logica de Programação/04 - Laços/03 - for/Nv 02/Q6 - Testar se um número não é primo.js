// Testar se um número não é primo

let numero = 48;
let nDivisores = 0;

for (let i = 0; i <= numero; i++) {
    if (numero % i == 0) {
        nDivisores++;
    }
}
console.log(nDivisores);

if (nDivisores == 2) {
    console.log('primo');
} else {
    console.log('composto');
}