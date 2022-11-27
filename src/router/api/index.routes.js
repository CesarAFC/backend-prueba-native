const router = require('express').Router();
const apiV1 = require('./v1/index.routes');
const ErrorContoller = require('../../middlewares/error');
const controller = new ErrorContoller();  

router.use('/v1', apiV1);

router.use(controller.apiError404);

module.exports = router;
