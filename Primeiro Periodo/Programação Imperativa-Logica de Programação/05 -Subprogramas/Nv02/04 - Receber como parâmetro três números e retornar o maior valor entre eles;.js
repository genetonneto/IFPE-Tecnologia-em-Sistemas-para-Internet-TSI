// Receber como parâmetro três números e retornar o maior valor entre eles;

function numeros(n1,n2,n3){
	if (n1 > n2 && n1 > n3){
		return n1;
	} else if (n2 > n1 && n2 > n3){
		return n2;
	} else {
		return n3;
	}
}
let resultado = numeros(7,5,9);
console.log(resultado);
