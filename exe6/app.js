const express = require("express");
const app = express();
const pages = require("./routes/pages")


app.use("/", pages);


app.listen(8080, () => {
    console.log("Server started.");
});