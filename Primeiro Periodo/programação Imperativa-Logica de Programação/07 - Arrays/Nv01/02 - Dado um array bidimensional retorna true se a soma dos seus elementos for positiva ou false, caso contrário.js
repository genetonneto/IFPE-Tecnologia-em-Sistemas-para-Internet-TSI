// Implementar um subprograma que dado um array bidimensional retorna true se a soma dos seus elementos for positiva ou false, caso contrário;

function elemento(arrayBi) {
    let soma = 0;
    for (i = 0; i < arrayBi.length; i++) {
        for (j = 0; j < arrayBi[i].length; j++) {
            soma += arrayBi[i][j];
            if (soma > 0) {
                return true;
            } else {
                return false;
            }
        }
    }
}

let arrayBi = [
    [-1, -2, -3, -4, -5],
    [-1, -2, -3, -4, -5]
];

let resultado = elemento(arrayBi);
console.log(resultado);