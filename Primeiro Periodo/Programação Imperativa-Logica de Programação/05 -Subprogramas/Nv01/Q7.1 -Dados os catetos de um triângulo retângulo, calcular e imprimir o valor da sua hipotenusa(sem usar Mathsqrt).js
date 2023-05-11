// Dados os catetos de um triângulo retângulo, calcular e imprimir o valor da sua hipotenusa; (sem usar o Math.sqrt)

function hipotenusa (a,b){
	return ((a ** 2) + (b ** 2)) ** (1/2)
}

console.log(hipotenusa(9,12))
