const nome = 'Adelson';
const idade = 25;
const cidade = 'Salvador';

// Normal, concatenando strings
const apresentacao1 = 'Concatenando ' + '- Meu nome é ' + nome + ' e tenho ' + idade + ' anos e nasci em ' + cidade + '.';

// Usando Template String
const apresentacao2 = `\nTemplate String - Meu nome é ${nome} e tenho ${idade} anos e nasci em ${cidade}`;	

console.log(apresentacao1);
console.log(apresentacao2);