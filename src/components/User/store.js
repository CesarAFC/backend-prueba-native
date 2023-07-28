const { Op, Model } = require('sequelize');
const Models = require('../../db/models/index');

module.exports = class UserStore {
	constructor(config) {
		this.config = config;
	}

	async findAll() {
		return Models.Photos.findAll()
		// throw new Error('Not implemented');
	}

	async create({lat, lon, picture}) {
		return Models.Photos.create({
			lat,
			lon,
			picture,
		})
	}
};
