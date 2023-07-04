// Multiplicar dois números sem usar o operador da multiplicação (Dica: 5x3 = 5 + 5 + 5);

let n1 = 5;
let n2 = 2;
let contador = 0;
let resultado = 0;

while (contador < n2) {
    resultado = resultado + n1;
    contador++;
}
console.log(resultado);