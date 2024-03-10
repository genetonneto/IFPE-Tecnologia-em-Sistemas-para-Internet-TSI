class Quadrado {
    constructor(lado) {
        this.ladoA = lado;
        this.ladoB = lado;
        this.ladoC = lado;
        this.ladoD = lado;
    }
}

function ladosIguais(quadradoA, quadradoB) {
    if ((((quadradoA.ladoA == quadradoB.ladoA) && (quadradoA.ladoB == quadradoB.ladoB) && (quadradoA.ladoC == quadradoB.ladoC) && quadradoA.ladoD == quadradoB.ladoD))) {
        return ("Quadrado A e igual ao Quadrado B");
    } else {
        return ("Quadrado A e diferente do Quadrado B");
    }
}

let quadradoA = new Quadrado(5);
let quadradoB = new Quadrado(6);
let resultado = ladosIguais(quadradoA, quadradoB);
console.log(resultado);