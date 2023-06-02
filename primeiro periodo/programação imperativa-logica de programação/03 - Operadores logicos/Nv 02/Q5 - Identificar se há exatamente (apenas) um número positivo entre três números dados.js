// Identificar se há exatamente (apenas) um número positivo entre três números dados;

let n1 = -3;
let n2 = -5;
let n3 = 7;


if (n1 > 0 && n2 > 0 && n3 > 0){
	console.log('todos os numeros sao positivos');
} else if (n1 > 0 && n2 > 0 && n3 < 0){
	console.log('dois numeros sao positivos');
} else if (n1 > 0 && n2 < 0 && n3 > 0){
	console.log('dois numeros sao positivos');
} else if (n1 > 0 && n2 < 0 && n3 < 0){
	console.log('um unico numero positivo');
} else if (n1 < 0 && n2 > 0 && n3 < 0){
	console.log('um unico numero positivo');
} else if (n1 < 0 && n2 > 0 && n3 > 0){
	console.log('apenas dois numeros positivos');
} else if (n1 < 0 && n2 < 0 && n3 > 0)
	console.log('apenas um numero positivo');
