const cliente = {
	nome: "Adelson",
	idade: 33,
	cpf: "123456789",
	email: "email@email.com",
	telefone: ["111123456", "000123456"],
	dependentes: [
		{
			nome: "Laura Mesquita",
			idade: 12,
		},
		{
			nome: "Juliana",
			idade: 11,
		},
	],
	saldo: 100,
	depositar: function (valorDeposito) {
		this.saldo += valorDeposito;
	},
	sacar: function (valorSaque) {
		this.saldo -= valorSaque;
	},
};

console.log(`O saldo inicial é ${cliente.saldo}`);
// chamando a funcao depositar para incrementar o saldo
cliente.depositar(50);
console.log(`O novo saldo é ${cliente.saldo}`);
// chamando a funcao sacar para decrementar o saldo
cliente.sacar(20);
console.log(`O novo saldo é ${cliente.saldo}`);
