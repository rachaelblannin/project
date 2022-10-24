const express = require('express');

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

const server = app.listen(1045,() =>{
    console.log(`server started succesfully on port ${server.address().port}`);
})