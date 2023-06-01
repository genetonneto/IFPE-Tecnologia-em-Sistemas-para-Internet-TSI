// Implementar um subprograma que dados um array bidimensional de booleans, imprime true se ao menos um dos elementos do array forem verdadeiros ou false, caso contrário;

function elementos(arrayBi) {
    for (i = 0; i < arrayBi.length; i++) {
        for (j = 0; j < arrayBi[i].length; j++) {
            if (arrayBi[i][j] != true) {
                return false;
            }
        }
    } return true;
}

let arrayBi = [
    [true, true, true],
    [true, true, true]
];

console.log(elementos(arrayBi));
// let resultado = elementos(arrayBi);
