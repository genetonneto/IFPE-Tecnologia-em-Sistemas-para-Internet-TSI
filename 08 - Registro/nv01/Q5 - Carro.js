class Carro {
    constructor(ano, marca, modelo, cor, motor) {
        this.ano = ano;
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.motor = motor;
    }
}

function parametro(carro1, carro2) {
    if (carro1.motor > carro2.motor) {
        return (carro1.ano + " - " + carro1.marca + " - " + carro1.modelo + " - " + carro1.cor + " - " + carro1.motor);
    } else {
        return (carro2.ano + " - " + carro2.marca + " - " + carro2.modelo + " - " + carro2.cor + " - " + carro2.motor);
    }
}

let carro1 = new Carro(1997, "Subaro", "WRX STI", "Azul", 2.0);
let carro2 = new Carro(1988, "Honda", "Civic", "CRX II", 1.5);
let resultado = parametro(carro1, carro2);
console.log(resultado);