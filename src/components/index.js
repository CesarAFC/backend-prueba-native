const UserController = require('./User/controller');

const UserStore = require('./User/store');

module.exports = {
	controllers: {
		User: UserController,
	},
	stores: {
		User: UserStore,
	},
};
