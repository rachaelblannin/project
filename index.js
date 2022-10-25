const express = require('express');

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json()); // needs to be before the routes

const routes = require("./routes.js");

app.use(routes);

app.use(express.json());

const server = app.listen(1045,() =>{
    console.log(`server started succesfully on port ${server.address().port}`);
})

module.exports = server;