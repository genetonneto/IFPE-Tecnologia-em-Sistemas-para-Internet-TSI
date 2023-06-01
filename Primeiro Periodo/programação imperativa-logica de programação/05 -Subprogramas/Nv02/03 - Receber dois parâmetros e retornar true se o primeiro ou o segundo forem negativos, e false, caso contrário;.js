// Receber dois parâmetros e retornar true se o primeiro ou o segundo forem negativos, e false, caso contrário;

function boolean(t, f) {
    if ((t < 0) || (f < 0)){
		return true
	} else {
		return false
	}
}
console.log(boolean(-1,2));

