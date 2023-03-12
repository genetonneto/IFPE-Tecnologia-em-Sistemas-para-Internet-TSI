// Testar se um número é divisível por 3 mas não por 4 (tente fazer usando apenas if’s);

let numero = 8;

if ((numero % 3 == 0) && (numero % 4 == 1)) {
    console.log(numero + " e divisivel por 3 e nao por 4");
} else {
    console.log(numero + " e divisivel por 4 mas não por 3");
}