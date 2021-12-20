const express = require("express");
const consign = require("consign");
//const bodyParser = require("body-parser");

module.exports = () => {
	const app = express();

	// usa o package body-parser para ler o que esta sendo recebido no body atraves do metodo do post
	//app.use(bodyParser.urlencoded({ extended: true }));
	//app.use(bodyParser.json());

	// o express ja possui uma ferramenta nativa que lida com a leitura do body, nao sendo necessario o body-parser
	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());

	// consign é uma ferramenta para lidar com as rotas
	// pega todas as rotas que estao em controllers e disponibiliza para o app
	consign().include("controllers").into(app);

	return app;
};
