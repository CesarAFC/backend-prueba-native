const router = require('express').Router();
const components = require('../../../components');
const controller = new components.controllers.User();

const multer = require('multer');
const upload = multer();

router.get(
	'/',
	controller.findAll
);

router.post (
	'/',
	upload.single('picture'),
	controller.create
)

module.exports = router;
