// Dados os catetos de um triângulo retângulo, calcular e imprimir o valor da sua hipotenusa;

function hipotenusa (catOp, catAdj) {
    return Math.sqrt((catOp ** 2) + (catAdj ** 2));
}

console.log(hipotenusa(9,12));


// function hipotenusa(a,b){
// 	return Math.sqrt((a ** 2) + (b ** 2))
// }
// console.log(hipotenusa(9,12))