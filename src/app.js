const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const { config } = require('./config/index');
const { createServer } = require('http');

const app = express();
const httpServer = createServer(app);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('port', config.port);

app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(cors());
app.use(morgan(config.dev ? 'dev' : 'common'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routers
app.use('/', require('./router/index.routes'));

module.exports = { app, httpServer };
