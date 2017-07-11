var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Property = require('./models/saMod'),
  bodyParser = require('body-parser'),
  exBusBoy = require('express-busboy'),
  filePath = 'C://Users/Elliot/first_database/data/files';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/TEST_APP');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
exBusBoy.extend(app, {
  upload: true,
  path: filePath,
})

app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

 res.setHeader('Cache-Control', 'no-cache');
 next();
});

var routes = require('./routes/saRot');
routes(app);


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
