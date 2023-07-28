const Store = require('./store');
const store = new Store();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { config } = require('../../config');

module.exports = class UserController {

	async findAll(req, res, next) {
		try {
			const users = await store.findAll();
			res.status(200).json(users);
		} catch (error) {
			next(error);
		}
	};

	async create(req, res, next) {
		try {
			const {lat, lon} = req.body;
			const response = await store.create({lat, lon, picture: req.file});
			res.status(200).json(response)
		}  catch(e) {
			next(e);
		}
	}
};
