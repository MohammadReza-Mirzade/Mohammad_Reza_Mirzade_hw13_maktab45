const express = require("express");
const app = express();
const user = require("./routes/user");


app.use("/user", user);

app.listen(8080, () => {
    console.log("Server started.");
});