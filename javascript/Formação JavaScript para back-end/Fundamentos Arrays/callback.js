const nomes = ['joao', 'juliana', 'caio', 'marcela'];

// o forEach precisa receber uma funcao
nomes.forEach(imprimeNomes)

// foi criada uma funcao para que seja feito o callback dela dentro do forEach
function imprimeNomes(nome) {
  console.log(nome); 
}