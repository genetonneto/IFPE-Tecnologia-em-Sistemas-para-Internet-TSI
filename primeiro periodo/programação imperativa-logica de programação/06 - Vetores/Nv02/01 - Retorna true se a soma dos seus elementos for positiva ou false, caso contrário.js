// Implementar um subprograma que dado um vetor, retorna true se a soma dos seus elementos for positiva ou false, caso contrário;

function elemento(vetor) {
    let soma = 0;
    for (i = 0; i < vetor.length; i++) {
        soma += vetor[i];
        if (soma > 0) {
            return true;
        } else {
            return false;
        }
    }
}
let vetor = [-1, -2, -3, -4];
console.log(elemento(vetor));