const notas = [10, 9, 8, 7, 6]

// o map retorna uma nova array 
// if ternario = se nota = 10 ? valor verdadeiro : valor falso 
const notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota)

console.log(notasAtualizadas)
