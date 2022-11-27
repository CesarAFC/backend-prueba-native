module.exports = class ErrorContoller {
	error404 = (req, res) => {
		res.status(404).render('404');
	};

	apiError404 = (req, res) => {
		res.status(404).send('route not Found');
	};

	handleError = (err, req, res, next) => {
		console.log(err);
		return res.status(err.status).json(err.message);
	};
};
