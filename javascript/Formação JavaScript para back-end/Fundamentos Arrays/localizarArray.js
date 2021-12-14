const alunos = ['joao', 'juliana', 'caio', 'ana']
const mediaAlunos = [10,7,9,6]

// lista de duas dimensoes sao listas de listas
const listaMediaAlunos = [alunos,mediaAlunos]

const exibeNota = (nomeAluno) => {
  if (listaMediaAlunos[0].includes(nomeAluno)){
    indice = listaMediaAlunos[0].indexOf(nomeAluno)
    return `${listaMediaAlunos[0][indice]} sua nota é ${listaMediaAlunos[1][indice]}`
  } else {
    return `O aluno nao esta cadastrado`
  }
}

console.log(exibeNota('ana'))