const cliente = {
  nome: 'Adelson',
  idade: 33,
  cpf: '123456789',
  email: 'email@email.com',
}
// print infos
console.log(`O nome do cliente é ${cliente.nome} e o email ${cliente.email}`)

const chave = ['nome', 'idade', 'cpf', 'email']
// usando forEach para percorrer uma lista com as chaves do objeto
chave.forEach(info => console.log(cliente[info]))

const cliente2 = {
  nome: ['Adelson', 'Maiara', 'Jose'],
  idade: [33, 34, 30],
  cpf: ['123456789', '756456789', '124256789'],
  email: ['email@email.com', 'email2@email.com','email3@email.com'],
}
console.log(`\nO nome do cliente é ${cliente2.nome[1]} e o email ${cliente2.email[1]}`)

// adicionando campos (chaves) ao objeto
cliente.telefone = '9191010101'
console.log(`\nO cliente agora tem o telefone ${cliente.telefone}`)
// alterando o campo telefone
cliente.telefone = '123456'
console.log(`O novo telefone é ${cliente.telefone}`)

cliente.telefone = ['111123456', '000123456']
// para que uma chave tenha mais de um valor podemos usar um array
// usando o forEach para mostrar os telefones dentro do array 
cliente.telefone.forEach(fone => console.log(`\nAgora o cliente tem mais de um telefone: ${fone}`))

// adicionando outro objeto em formato de array dentro do primeiro
cliente.dependentes = [
  {
  nome: 'Laura',
  idade: 12,
  }
]
// alterando a propriedade nome do primeiro dependente
cliente.dependentes[0].nome = 'Laura Mesquita'

// incluindo um novo dependente
cliente.dependentes.push(
  {
  nome: 'Juliana',
  idade: 11,
  }
)
console.log(cliente)

const maisNova = cliente.dependentes.filter(dependente => dependente.idade < 12)

console.log(`A mais nova é ${maisNova[0].nome}`)




