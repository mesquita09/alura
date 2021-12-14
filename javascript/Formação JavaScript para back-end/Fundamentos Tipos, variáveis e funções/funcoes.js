// chama a funcao passando um parametro
// é possivel chamar a antes dela ser declarada pois o JS faz o Hoisting, ou seja, antes de rodar o codigo ele carrega todas as funcoes e as variáveis VAR... no caso de const e let não fazem o Hoisting.
imprimeTexto(`O resultado da funcao soma é ${soma()}`);

// declara funcao que recebe um parametro 'texto'
function imprimeTexto(texto) {
  console.log(texto);
}

// criando uma nova funcao que será chamada dentro da funcao anterior
function soma(){
  return 2 + 2;
}

// criando funcao que recebe dois parametros
function soma2(num1, num2){
  return num1 + num2;
}

console.log(`\nO resultado da soma2 será de acordo com os parametros passados em num1 e num2 = ${soma2(2,2)}`);

// FUNCAO ANONIMA
// essa funcao nao faz o Hoisting pois é uma const 
const soma3 = function(num1, num2){
  return num1 + num2;
}
console.log(`\nO resultado da soma3 será de acordo com os parametros passados em num1 e num2 = ${soma3(5,2)}`);

// ARROW FUNCTION
// nao faz o Hoisting
// apenas uma linha de instrução
const soma4 = (num1, num2) => num1 + num2;
console.log(`\nO resultado da soma4 será de acordo com os parametros passados em num1 e num2 = ${soma4(5,4)}`);

// com mais de uma linha de instrução
const numMaior = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};
console.log(`\nO numero maior é ${numMaior(5,4)}`);