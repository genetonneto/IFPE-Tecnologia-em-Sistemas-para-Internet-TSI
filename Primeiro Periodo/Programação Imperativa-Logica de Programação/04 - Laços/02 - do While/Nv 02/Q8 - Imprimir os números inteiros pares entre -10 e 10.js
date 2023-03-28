// Imprimir os números inteiros pares entre -10 e 10.

let numero = -10;

do {
    numero += 1;
    if (numero % 2 == 0) {
        console.log(numero);
    }
} while (numero < 9);