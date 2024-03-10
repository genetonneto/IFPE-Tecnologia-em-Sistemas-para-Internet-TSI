class Cubo {
    constructor(area) {
        this.area = area;
    }
}

function parametro(cubo1, cubo2) {

    if (cubo1.area > cubo2.area) {
        return ("Cubo A: " + cubo1.area);
    } else {
        return ("Cubo B: " + cubo2.area);
    }
}

let cubo1 = new Cubo(3);
let cubo2 = new Cubo(20);
let resultado = parametro(cubo1, cubo2);
console.log(resultado)