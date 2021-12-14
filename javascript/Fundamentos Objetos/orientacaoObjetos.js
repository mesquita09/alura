// definindo a classe com as propriedades e metodos
// classe sempre com letra maiuscula
class Cliente {
	constructor(nome, cpf, email, saldo) {
		this.nome = nome;
		this.cpf = cpf;
		this.email = email;
		this.saldo = saldo;
	}

	depositar(valor) {
		this.saldo += valor;
	}

	exibirSaldo() {
		console.log(`O saldo de ${this.nome} é ${this.saldo}`);
	}
}
class ClientePoupanca extends Cliente {
	constructor(nome, cpf, email, saldo, saldoPoupanca) {
		super(nome, cpf, email, saldo);
		this.saldoPoupanca = saldoPoupanca;
	}
	depositarPoupanca(valor) {
		this.saldoPoupanca += valor;
	}
	exibirSaldoPoupanca() {
		console.log(`O saldo da poupanca de ${this.nome} é ${this.saldoPoupanca}`);
	}
}

// criando novo cadastro a partir da classe ClientePoupanca que herda os atributos da classe Cliente
const adelson = new ClientePoupanca(
	"adelson",
	"111222333",
	"email@email.com",
	1000,
	500
);
const maiara = new ClientePoupanca(
	"maiara",
	"444555666",
	"email@email.com",
	2000,
	500
);
console.log(adelson);
console.log(maiara);

// chamando funcoes herdadas da classe Cliente
adelson.depositar(500);
maiara.depositar(300);
// chamando funcoes da classe ClientePoupanca
adelson.depositarPoupanca(300);
maiara.depositarPoupanca(700);

adelson.exibirSaldo();
maiara.exibirSaldo();

adelson.exibirSaldoPoupanca();
maiara.exibirSaldoPoupanca();
