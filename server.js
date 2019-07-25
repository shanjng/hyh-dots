//Install express server
const express = require('express');
const path = require('path');
var bodyParser = require("body-parser");
const mysql = require("mysql");
const favicon = require('express-favicon');

const app = express();
app.use(bodyParser.json());

// deals with favicon error
app.use(favicon(__dirname + '/dist/hyhproj/favicon.ico'));

// API ENDPOINTS BELOW
// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
}  

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/hyhproj'));

app.get('/', function(req,res) { 
    res.sendFile(path.join(__dirname + '/dist/hyhproj/index.html'));
});

// Start the app by listening on the default Heroku port
const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));