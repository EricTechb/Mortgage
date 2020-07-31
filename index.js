//http://192.168.1.189:3000/

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 52051;

require('dotenv').config({path: 'variables.env'});

mongoose.connect(process.env.DATABASE);
mongoose.connection.on('error', function(error){
    console.log(error.message);
});

const routes = require('./routes/routes')

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser());

app.use(cookieParser());

app.use('/', routes);

const server = app.listen(PORT, function(){
    console.log('Express server running on port', PORT)
});


//{}