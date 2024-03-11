class Carro {
    constructor(marca, modelo, motor, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
        this.ano = ano;
    }
}

function ComparaCarros(mazda, nissan) {
    if (mazda.motor > nissan.motor) {
        return ("Motor do Mazda: " + mazda.motor);
    } else {
        return ("Motor do Nissan: " + nissan.motor);
    }
}

class ListaCarro {
    constructor(carros) {
        this.carros = carros;
    }
}

function contemCarros(array, veiculos) {
    for (i = 0; i < array.carros.length; i++) {
        if (veiculos == array.carros[i]) {
            return true;
        }
    }
    return false;
}

let mazda = new Carro("Mazda", "RX-7", 1.3, 1992);
let nissan = new Carro("Nissan", "350z", 3.5, 2007);

let array = new ListaCarro([mazda, nissan]);

let contem = contemCarros(array, mazda);

console.log("Mazda esta na lista: ", contem);