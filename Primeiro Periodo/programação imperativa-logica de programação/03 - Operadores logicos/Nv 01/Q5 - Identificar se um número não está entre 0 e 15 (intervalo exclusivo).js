// Identificar se um número não está entre 0 e 15 (intervalo exclusivo);

let numero = 16;

if (numero < 0 && numero > 15) {
    console.log(numero + " nao esta no intervalo");
} else {
    console.log(numero + " esta no intervalo");
}