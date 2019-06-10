var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  mongoose = require('mongoose'),

  Film = require('./api/modules/film/filmListModels'),

  bodyParser=require('body-parser');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Filmsdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/modules/film/filmListRouters');

routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
