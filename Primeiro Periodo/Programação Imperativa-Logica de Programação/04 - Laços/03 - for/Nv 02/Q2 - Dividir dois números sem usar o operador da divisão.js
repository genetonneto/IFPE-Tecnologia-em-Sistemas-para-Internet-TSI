// Dividir dois números sem usar o operador da divisão (Dica: 9/3 = 9 - 3 - 3 - 3);

let n1 = 20;
let n2 = 2;
let resultado = 0;

for (let i = n1; i >= n2; i -= n2) {
    resultado++;
}
console.log(resultado);