const express = require("express");
const app = express();
const user = require("./routes/user");
const admin = require("./routes/admin");

app.use("/admin", admin);
app.use("/user", user);

app.listen(8080, () => {
    console.log("Server started.");
});