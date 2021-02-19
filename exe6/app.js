const express = require("express");
const app = express();
const pages = require("./routes/pages");
const path = require("path");

app.use(express.static(path.join(__dirname, 'public')));

app.use("/", pages);

app.listen(8080, () => {
    console.log("Server started.");
});