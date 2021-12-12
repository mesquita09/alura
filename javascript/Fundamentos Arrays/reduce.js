const salaJs = [7,8,8,7,10,6.5,4,10,7]
const salaJava = [6,5,8,9,5,6]
const salaPython = [7,3.5,8,9.5]

function mediaSalas(notaSalas) {
  const somaNotas = notaSalas.reduce((acumulador, atual) => atual + acumulador, 0)
  return somaNotas/notaSalas.length
}

console.log(`Media JavaScript ${mediaSalas(salaJs)}`)
console.log(`Media Java ${mediaSalas(salaJava)}`)
console.log(`Media Python ${mediaSalas(salaPython)}`)

// resolvendo novamente o exercicio 01 -> arquivo media.js
const notas = [10, 6.5, 8, 7]

const media = notas.reduce((acum, atual) => atual + acum, 0) / notas.length

console.log(`A média é ${media}`)

