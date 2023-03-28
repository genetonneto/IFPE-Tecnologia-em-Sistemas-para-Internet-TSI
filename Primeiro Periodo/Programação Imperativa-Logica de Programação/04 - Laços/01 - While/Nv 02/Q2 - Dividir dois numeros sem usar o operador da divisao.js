// Dividir dois números sem usar o operador da divisão (Dica: 9/3 = 9 - 3 - 3 - 3);

let n1 = 4;
let n2 = 2;
let contador = 0;

while (n1 >= n2) {
    n1 = n1 - n2;
    // contador++;
    console.log(n1);
}