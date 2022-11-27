const { Op } = require('sequelize');
const Models = require('../../db/models/index');

module.exports = class UserStore {
	constructor(config) {
		this.config = config;
	}

	async findAll() {
		throw new Error('Not implemented');
	}
};
