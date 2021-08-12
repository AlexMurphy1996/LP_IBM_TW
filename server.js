const express = require("express");
const config = require('./config/config').config;
const bodyParser = require('body-parser');
const api = require('./routes/api')
var path = require('path');

let app = express();

app.use(bodyParser.json())
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }))
 
//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/api', api);


 
let server = app.listen(parseInt(process.env.PORT || config.port, 10), function(){
    let port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});

module.exports = server;