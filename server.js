var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  mongoose = require('mongoose'),
  Film = require('./api/models/filmListModels'),
  bodyParser=require('body-parser');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Filmsdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./routers/filmListRouters');
routes(app);
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
