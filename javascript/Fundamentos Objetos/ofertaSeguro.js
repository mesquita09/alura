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
};

function ofertaSeguro(objCliente) {
	const propriedadesClientes = Object.keys(objCliente);
	if (propriedadesClientes.includes("dependentes")) {
		console.log(`Tem oferta de seguro para o cliente ${objCliente.nome}`);
	} else {
		console.log(`Não há oferta de seguro para o cliente ${objCliente.nome}`);
	}
}

ofertaSeguro(cliente);
