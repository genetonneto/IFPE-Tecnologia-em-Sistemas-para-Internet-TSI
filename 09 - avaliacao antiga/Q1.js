// a) (0.5) [Vetores] Contar quantas vezes um número ocorre dentro de um vetor;
// b) (0.5) [Vetores x Subprogramas] Modificar o código da letra anterior para
// transformá-lo em um subprograma que, dado um vetor e um número como
// parâmetros, retorne quantas vezes o número ocorre no vetor;

function parametro(vetor, numero) {

    let cont = 0;
    for (i = 0; i < vetor.length; i++) {
        if (vetor[i] == numero) {
            cont++;
        }
    }
    return cont;
}

let vetor = [1, 1, 2, 3, 1];
let numero = 1;
let resultado = parametro(vetor, numero);
console.log("Q1/a/b = " + resultado);


// c) (0.5) [Vetores] Testar se dois vetores são idênticos;
// d) (0.5) [Vetores x Subprogramas] Modificar o código da letra anterior para transformá-lo em um subprograma que, dados dois vetores como parâmetros,retornar true se ambos forem iguais, ou false, caso contrário.

function parametroVetor(v1, v2) {
    for (i = 0; i < v1.length; i++) {
        if (v1[i] !== v2[i]) {
            return false;
        }
    }
    return true;
}

let v1 = [1, 1, 1];
let v2 = [1, 1, 1];
let resultadoVetor = parametroVetor(v1, v2);
console.log("Vetores identicos: ", resultadoVetor);