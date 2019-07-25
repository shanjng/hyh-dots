//Install express server
const express = require('express');
const path = require('path');
var bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
app.use(bodyParser.json());

// API ENDPOINTS BELOW
// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
}  

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/hyh1'));

app.get('/', function(req,res) { 
    res.sendFile(path.join(__dirname + '/dist/hyh1/index.html'));
});
app.use("/api/auth", require("./src/app/api/routes/auth-routes"));

// Start the app by listening on the default Heroku port
const PORT = process.env.PORT || 4200;

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));