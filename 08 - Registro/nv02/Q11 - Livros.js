class Livro {
    constructor(nome, autor, paginas) {
        this.nome = nome;
        this.autor = autor;
        this.paginas = paginas;
    }
}

function livros(sql, logicaImperativa, poo) {
    if ((sql.paginas > logicaImperativa.paginas) && (sql.paginas > poo.paginas)) {
        return "Sql tem a maior quantidade de paginas";
    } else if ((logicaImperativa.paginas > sql.paginas) && (logicaImperativa.paginas > poo.paginas)) {
        return "Logica tem a maior quantidade de paginas";
    } else {
        return "Poo tem a maior quantidade de paginas";
    }
}

class ListaLivros {
    constructor(exemplares) {
        this.exemplares = exemplares;
    }
}

function contemExemplares(array, exemplar) {
    for (i = 0; i < array.exemplares.length; i++) {
        if (exemplar == array.exemplares[i]) {
            return true;
        }
    }
    return false;
}

let sql = new Livro("Introducao a SQL", "Milton", 1000);
let logicaImperativa = new Livro("Logica Imperativa para Leigos", "Allan", 500);
let poo = new Livro("Paradigmas da Programacao Orientada a Objetos", "Gustavo", 3000);
let array = new ListaLivros([sql, logicaImperativa, poo]);
let contem = contemExemplares(array, sql);
console.log(contem);