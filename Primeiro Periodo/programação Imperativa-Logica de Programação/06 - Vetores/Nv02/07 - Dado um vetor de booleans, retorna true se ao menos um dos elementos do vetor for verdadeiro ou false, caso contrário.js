// Implementar um subprograma que dado um vetor de booleans, retorna true se ao menos um dos elementos do vetor for verdadeiro ou false, caso contrário;

function booleans(vetor) {
    for (i = 0; i < vetor.length; i++) {
        if ((vetor[i] == true) || (vetor[i] == false)) {
            return true;
        }
    }
}

let vetor = [true, false, false];
console.log(booleans(vetor));
