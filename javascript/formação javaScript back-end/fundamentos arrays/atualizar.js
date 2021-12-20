const listaChamada = ['joao', 'ana', 'caio', 'lara', 'marjorie', 'leo']

// metodo splice tem 3 parametros (index que comeca, qtd que vai alterar a partir do primeiro parametro, inclui algo no lugar)
listaChamada.splice(1,2,'rodrigo')
console.log(`Alterando ana e caio fica: ${listaChamada}`)
