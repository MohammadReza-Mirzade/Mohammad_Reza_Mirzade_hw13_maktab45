const express = require("express");
const app = express();
const user = require("./routes/user");
const admin = require("./routes/admin");

app.use("/admin", admin);
app.use("/user", user, (req, res) => {
    res.send("<html><body><form action='user/getUser' method='post'><input type='text' name='name' id='name'><input type='submit' value='Submit'></form></body></html>");
});

app.listen(8080, () => {
    console.log("Server started.");
});