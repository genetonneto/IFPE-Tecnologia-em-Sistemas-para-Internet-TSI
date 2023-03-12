// Computar o Índice de Massa Corporal (peso dividido pelo quadrado da altura) e classificar o resultado entre magreza (inferior a 18.5), saudável (entre 18.5 e 25), sobrepeso (acima de 25);

let peso = 76.500;
let altura = 1.82;
let imc = peso / (altura ** 2);

if (imc < 18.5) {
    console.log("Magreza" + imc);
} else if (imc >= 18.5 && imc <= 25) {
    console.log("Saudavel" + imc);
} else {
    console.log("Sobrepeso" + imc);
}