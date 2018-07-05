require('dotenv').config();

var express = require('express');
var app = express();

var authTest = require('./controllers/authtestcontroller'); //1
var tournamnet = require('./controllers/tournamentcontroller');
var user = require('./controllers/usercontroller');
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync(); // tip: {force: true} for resetting tables
app.use(bodyParser.json());
app.use(require('./middleware/headers'));
/******************
 * EXPOSED ROUTES
*******************/

app.use('/api/user', user);


/******************
 * PROTECTED ROUTES
*******************/

app.use(require('./middleware/validate-session')); //2
app.use('/authtest', authTest); //3
app.use('/tournament', tournamnet);


app.listen(process.env.PORT, function(){
    console.log('App is listening on 3000.')
});