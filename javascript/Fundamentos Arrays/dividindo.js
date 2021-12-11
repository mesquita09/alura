const nomes = ["joao", "juliana", "ana", "lara", "marcos"]

// metodo slice recebe 2 parametros para fazer o corte...qual a posicao no indice do array que comeca e onde termina ... no caso do indice 0 até a metade do array usando o .length para determinar a metade ...caso nao passe o segundo parametro ele vai ate o final do array
const sala1 = nomes.slice(0, nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log(`Alunos da sala 1 sao ${sala1}`, `\nAlunos da sala 2 sao ${sala2}`)

