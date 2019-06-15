const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
const DB_HOST = 'localhost';
const DB_NAME = 'Filmsdb';

const mongoose = require('mongoose'),
	bodyParser = require('body-parser');
	glob = require('glob'),
	path = require('path');

//require all models automatically
glob.sync(`api/modules/**/*.Models.js`).forEach((file) => {
	require(path.resolve(file));
});

mongoose.Promise = global.Promise;
const options = {
	useNewUrlParser: true,
	useCreateIndex: true
};
mongoose.connect(`mongodb://${DB_HOST}/${DB_NAME}`, options);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//require all routers automatically
glob.sync(`api/modules/**/*.Routers.js`).forEach((file) => {
	require(path.resolve(file))(app);
});

app.use(express.static('public'));

app.use(function(req, res) {
	res.status(404).send({url: `${req.originalUrl} not found!`});
});

app.listen(PORT, () => console.info(`RESTful API Server is runing on ${PORT} port`));
