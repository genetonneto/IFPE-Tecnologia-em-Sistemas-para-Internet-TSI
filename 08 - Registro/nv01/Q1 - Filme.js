class Filme {
    constructor(nome, duracao) {
        this.nome = nome;
        this.duracao = duracao;
    }
}

function filmesIguais(f1, f2) {
    if ((f1.nome == f2.nome) && (f1.duracao == f2.duracao)) {
        return ("Os filmes sao iguais");
    } else {
        return ("Os filmes nao sao iguais");
    }
}

let ghost = new Filme('ghost', 130);
let matrix = new Filme('matrix', 130);
let iguais = filmesIguais(ghost, matrix);
console.log(iguais);