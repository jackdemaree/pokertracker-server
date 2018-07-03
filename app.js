require('dotenv').config();

var express = require('express');
var app = express();
var test= require('./controllers/testcontroller')
var user = require('./controllers/usercontroller') //1
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync(); // tip: {force: true} for resetting tables

app.use(bodyParser.json());

app.use('/test', test);

app.use('/api/user', user); //2

//3 You could also write it this way without the require statement above.
//app.use('/api/user', require('./controllers/usercontrollers'));

app.listen(3000, function(){
    console.log('App is listening on 3000.')
});