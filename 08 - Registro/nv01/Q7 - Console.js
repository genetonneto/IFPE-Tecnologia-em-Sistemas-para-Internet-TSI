class Console {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}

function parametro(console1, console2) {
    if (console1.ano > console2.ano) {
        return (console1.modelo + " e um modelo mais recente")
    } else if (console2.ano > console1.ano){
        return (console2.modelo + " e um modelo mais recente");
    }
}

let console1 = new Console("PlayStation", "PS2", 2002);
let console2 = new Console("Super Nintendo", "Nintendo", 1993);
let resultado = parametro(console1, console2);
console.log(resultado);