module.exports = (app) => {
	app.get("/atendimento", (req, res) => res.send(" atendimento get"));

	app.post("/atendimento", (req, res) => {
		console.log(req.body);
		res.send(" atendimento post");
	});
};
