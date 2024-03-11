class Filme {
    constructor(nome, duracao) {
        this.nome = nome;
        this.duracao = duracao;
    }
}

function filmesIguais(f1, f2) {
    if ((f1.nome == f2.nome) && (f1.duracao == f2.duracao)) {
        return true;
    } else {
        return false;
    }
}

class ListaFilmes {
    constructor(filmes) {
        this.filmes = filmes;
    }
}

function contemFilme(lista, filme) {
    for (i = 0; i < lista.filmes.length; i++) {
        if (filme == lista.filmes[i]) {
            return true;
        }
    }
    return false;
}

let ghost = new Filme("Ghost", 120);
let matrix = new Filme("Matrix", 130);
let blade = new Filme("Blade Runner", 125);
let lista = new ListaFilmes([ghost, blade]);
// console.log(lista);
let contem = contemFilme(lista, matrix);
console.log("Matrix esta na lista: ", contem);