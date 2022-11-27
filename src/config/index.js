require('dotenv').config();
const fs = require('fs');

const config = {
	dev: process.env.NODE_ENV !== 'production',
	port: process.env.PORT || 80,
	dbName: process.env.DB_NAME || 'ProjectHPC',
	dbUser: process.env.DB_USER || 'postgres',
	dbPassword: process.env.DB_PASSWORD || 'password',
	dbHost: process.env.DB_HOST || 'localhost',
	dbPort: process.env.DB_PORT || 5432,
	jwt_secret: process.env.JWT_SECRET,
};

module.exports = { config };
