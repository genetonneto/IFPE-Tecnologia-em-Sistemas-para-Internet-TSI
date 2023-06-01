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
 * Questão: 2
 *
 */


function elemento(array, dobro) {
    for (let cont1 = array.length - 1; cont1 >= 0; cont1--) {
        for (let cont2 = array[cont1].length - 1; cont2 >= 0; cont2--) {
            console.log(array[cont1][cont2] * dobro)
        }
    }
}

let array =
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

elemento(array, 2)