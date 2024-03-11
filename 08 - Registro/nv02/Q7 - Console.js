class Console {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}

function videoGame(playstation, nintendo, xbox) {
    if ((playstation.ano < nintendo.ano) && (playstation.ano < xbox.ano)) {
        return ("Playstation e mais antigo");
    } else if ((nintendo.ano < playstation.ano) && (nintendo.ano < xbox.ano)) {
        return ("Nintendo e o mais antigo");
    } else if ((xbox.ano < playstation.ano) && (xbox.ano < nintendo.ano)) {
        return ("Xbox e o mais antigo");
    }
}

class ListaConsole {
    constructor(consoles) {
        this.consoles = consoles;
    }
}

function contemConsole(array, console) {
    for (i = 0; i < array.consoles.length; i++) {
        if (console == array.consoles[i]) {
            return true;
        }
    }
    return false;
}

let playstation = new Console("PlayStation", "PS2", 2002);
let nintendo = new Console("Nintendo", "Super Nintendo", 1993);
let xbox = new Console("Microsoft", "Xbox-360", 2005);

let array = new ListaConsole([playstation, nintendo, xbox]);

let resultado = contemConsole(array, xbox);

console.log(resultado);