const router = require('express').Router();
const api = require('./api/index.routes');
const ErrorContoller = require('./../middlewares/error');
const controller = new ErrorContoller();


router.get('/', (req, res) => {
	res.render('index');
});

router.use('/api', api);

router.use(controller.error404);

router.use(controller.handleError);

module.exports = router;
