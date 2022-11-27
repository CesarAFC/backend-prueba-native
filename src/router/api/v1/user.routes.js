const router = require('express').Router();
const components = require('../../../components');
const controller = new components.controllers.User();

router.get(
	'/',
	controller.findAll
);

module.exports = router;
