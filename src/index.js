const app = require('./app').app;
const httpServer = require('./app').httpServer;

httpServer.listen(app.get('port'), () => {
	console.log(`server running at http://localhost:${app.get('port')}`);
});
