// funcao para criar cliente
function cliente(nome, cpf, email, saldo) {
	this.nome = nome;
	this.cpf = cpf;
	this.email = email;
	this.saldo = saldo;
	this.depositar = function depositar(valor) {
		this.saldo += valor;
	};
	this.sacar = function sacar(valor) {
		this.saldo -= valor;
	};
}
// apos definir o esqueleto do cadastro de cliente para criar um novo cliente deve passar o new para criar uma nova instancia da funcao junto com os parametros que ela deve receber
const adelson = new cliente("adelson", "123456", "email@email.com", 1000);

// funcao para criar cliente poupanca
function clientePoupanca(nome, cpf, email, saldo, saldoPoupanca) {
	cliente.call(this, nome, cpf, email, saldo);
	this.saldoPoupanca = saldoPoupanca;
}
// funcao para criar a propriedade de depositar
clientePoupanca.prototype.depositarPoupanca = function (valor) {
	this.saldoPoupanca += valor;
};

const adelsonPoupanca = new clientePoupanca(
	"adelson",
	"123456",
	"email@email.com",
	1000,
	200
);

// acessando a funcao depositar
adelson.depositar(1000);
adelsonPoupanca.depositarPoupanca(1000);
// acessando a funcao sacar
adelson.sacar(500);

console.log(adelson);
console.log(adelsonPoupanca);
