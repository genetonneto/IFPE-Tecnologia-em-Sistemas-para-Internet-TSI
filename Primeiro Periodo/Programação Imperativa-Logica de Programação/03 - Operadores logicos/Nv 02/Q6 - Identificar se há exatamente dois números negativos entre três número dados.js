// Identificar se há exatamente dois números negativos entre três número dados;

let n1 = -4;
let n2 = -5;
let n3 = 7;

if (n1 < 0 && n2 < 0 && n3 < 0){
	console.log('todos os numeros sao negativos');
} else if (n1 < 0 && n2 < 0 && n3 > 0){
	console.log('dois numeros sao negativos');
} else if (n1 < 0 && n2 > 0 && n3 < 0){
	console.log('dois numeros sao negativos');
} else if (n1 < 0 && n2 > 0 && n3 > 0){
	console.log('apenas um numero é negativo');
} else if (n1 > 0 && n2 < 0 && n3 > 0){
	console.log('apenas um numero negativo');
} else if (n1 > 0 && n2 < 0 && n3 < 0){
	console.log('apenas dois numeros sao negativos');
} else if (n1 > 0 && n2 > 0 && n3 < 0)
	console.log('apenas um numero negativo');