// Identificar se um número é divisível por 3 e 2;

let numero = 10;

if ((numero % 3 == 0) && (numero % 2 == 0)) {
    console.log(numero + " e divisivel por 3 e por 2");
} else if ((numero % 3 == 1) && (numero % 2 == 0)) {
    console.log(numero + " nao e divisivel por 3 mas sim por 2");
} else {
    console.log(numero + " divisivel por 3 mas nao por 2");
}