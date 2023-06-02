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
 * Questão: 1
 *
 */



function elemento(array, elemento) {
    let encontrou = false
    for (let linha = 0; linha < array.length && !encontrou; linha++) {
        for (let coluna = 0; coluna < array[linha].length && !encontrou; coluna++) {
            if (elemento == array[linha][coluna]) {
                encontrou = true
                console.log(`linha ${[linha]} coluna ${[coluna]}`)
            }
        }
    } return encontrou
}

array =
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 4, 9]
    ]

elemento(array, 4)
