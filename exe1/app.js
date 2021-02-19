const express = require("express");
const path = require('path');
const app = express();


app.get('/', function (req, res){
    res.send("Hello World.");
});


app.listen(8081, () => {
    console.log("Server started.");
});