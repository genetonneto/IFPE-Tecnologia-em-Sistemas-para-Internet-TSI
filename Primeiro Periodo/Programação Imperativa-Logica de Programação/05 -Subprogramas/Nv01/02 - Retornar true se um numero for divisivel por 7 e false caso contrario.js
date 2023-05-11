// Receber um número como parâmetro e retornar true se ele for divisível 7 e false caso contrário;

function parametro (numero) {
    if (numero % 7 == 0) {
        return true;
    } else {
        return false;
    }
}
let resultado = parametro(49);
console.log(resultado);