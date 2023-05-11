/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Geneton Alves da Silva Neto
 * Curso: IPI
 * Aula: Aula 09 - Arrays - Mini-prova
 * Questão: 3
 *
 */



/* ERRADA 


function funcFuncFunc(arr) {             // parametro declarado esta errado - poderia declarar um nome mais apropriado para o parametro "Funcfuncfunc"
    let a = 1                            // poderia ser chamada de cont/contador
    for (let i = 0; i < 10; i++) {       // falta mais um for para andar entre as colunas 
        if (elemento == 0) {             // falta a declaração do meu array + a minha linha e coluna com o valor do elemento
            i++     
        }
    }
    return i++                           //não precisa retornar com o sinal de ++
}

*/ 



function parametro(array) {
    let cont = 0
    let elemento = 4
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++){
            if(array[i][j] == elemento ){
                cont++
            }
        }
    } return cont
}

array =
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 4, 9]
    ]


console.log(parametro(array))


