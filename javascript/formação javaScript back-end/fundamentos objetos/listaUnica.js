const clientes = [
	{
		nome: "Andre",
		idade: 43,
		cpf: "1412412412",
		dependentes: [
			{
				nome: "Carlos",
				idade: 15,
			},
			{
				nome: "Juliana",
				idade: 21,
			},
		],
	},
	{
		nome: "Joana",
		idade: 39,
		cpf: "123456789",
		dependentes: [
			{
				nome: "Jessica",
				idade: 12,
			},
			{
				nome: "Marcos",
				idade: 11,
			},
		],
	},
];

// usando o ... = spread operator = operador de espalhamento para buscar a chave dentro do objeto e espalhar dentro de um novo array
const listaDependentes = [
	...clientes[0].dependentes,
	...clientes[1].dependentes,
];

// console.table mostra os dados em forma de tabela
console.table(listaDependentes);
