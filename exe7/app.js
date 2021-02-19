const express = require('express');
const app = express();
const path = require('path');
const api = require('./routes/api');


app.use(express.static(path.join(__dirname, './public')));


app.use("/", api);


app.listen(8081, () => {
    console.log("Server started.");
});