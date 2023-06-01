// Testar se um número é primo

let numero = 47;
nDvisores = 0;

for (let i = 0; i <= numero; i++) {
    if (numero % i == 0) { 
        nDvisores++;
    }
}
console.log(nDvisores);

if (nDvisores == 2) {
    console.log('primo');
} else {
    console.log('composto');
}