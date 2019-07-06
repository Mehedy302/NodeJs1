var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
 
var app = express();
let apiRoutes = require("./api/routes")

 
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
mongoose.connect('mongodb+srv://mehedy:mehedy@cluster0-hlkmz.mongodb.net/test?retryWrites=true&w=majority');

var db = mongoose.connection;
var port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello World This Is My First Api With Node.js and Mongodb'));
app.use('/api', apiRoutes)

app.listen(port, function () {
    console.log("Running  on port " + port);
});