/*
(3.5) Implemente os seguintes programas:
a) (1.0) [Registros] Crie um programa definindo um tipo sombrinha (ou
guarda-chuva), e no mesmo programa declare, inicialize e imprima os valores e uma variável do tipo sombrinha.
b) (0.5) [Registros x Subprogramas] Crie uma operação que, dada uma sombrinha como parâmetro, imprime todos seus atributos;
c) (1.0) [Registros] Crie um tipo chamado estoque contendo uma lista de sombrinhas, no mesmo programa declare, inicialize e imprima os valores e uma variável do tipo estoque;
d) (1.0) [Registros x Subprogramas] Crie uma operação que dado um estoque como parâmetro, retorna a sombrinha mais barata disponível no estoque.
*/

class Sombrinha {
    constructor(cor, tamanho, preco) {
        this.cor = cor;
        this.tamanho = tamanho;
        this.preco = preco;
    }
}

function imprimirSombrinha(sombrinha) {
    console.log("Cor: " + sombrinha.cor + " Tamanho: " + sombrinha.tamanho + " Preco: " + sombrinha.preco);
}

class Estoque {
    constructor(sombrinhas) {
        this.sombrinhas = sombrinhas;
    }
}

function listarEstoque(estoque) {
    for (let i = 0; i < estoque.sombrinhas.length; i++) {
        imprimirSombrinha(estoque.sombrinhas[i]);
    }
}

function sombrinhaMaisBarata(estoque) {
    let sombrinhaMaisBarata = estoque.sombrinhas[0];

    for (let i = 1; i < estoque.sombrinhas.length; i++) {
        if (estoque.sombrinhas[i].preco < sombrinhaMaisBarata.preco) {
            sombrinhaMaisBarata = estoque.sombrinhas[i];
        }
    }

    return sombrinhaMaisBarata;
}

const sombrinha1 = new Sombrinha("Azul", "Grande", 20);
const sombrinha2 = new Sombrinha("Verde", "Média", 15);

imprimirSombrinha(sombrinha1);
imprimirSombrinha(sombrinha2);

const estoqueSombrinhas = new Estoque([sombrinha1, sombrinha2]);

listarEstoque(estoqueSombrinhas);

const sombrinhaMaisBarataNoEstoque = sombrinhaMaisBarata(estoqueSombrinhas);

console.log("Sombrinha mais barata no estoque:");
imprimirSombrinha(sombrinhaMaisBarataNoEstoque);
