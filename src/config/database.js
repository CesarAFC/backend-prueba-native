const { config } = require('./index');
module.exports = {
	
	development: {
		username: config.dbUser,
		password: config.dbPassword,
		database: config.dbName,
		host: config.dbHost,
		port: config.dbPort,
		dialect: 'postgres',
		logging: false,
		seederStorage: 'sequelize',
	},
	test: {
		username: config.dbUser,
		password: config.dbPassword,
		database: config.dbName,
		host: config.dbHost,
		port: config.dbPort,
		dialect: 'postgres',
		logging: false,
		seederStorage: 'sequelize',
	},
	production: {
		username: config.dbUser,
		password: config.dbPassword,
		database: config.dbName,
		host: config.dbHost,
		port: config.dbPort,
		dialect: 'postgres',
		logging: false,
		seederStorage: 'sequelize',
	},
};
