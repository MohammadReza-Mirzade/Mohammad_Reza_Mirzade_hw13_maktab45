const express = require("express");
const app = express();
const page1 = require("./routes/page1");
const page2 = require("./routes/page2");
const page3 = require("./routes/page3");
const page4 = require("./routes/page4");
const page5 = require("./routes/page5");

app.use("/", page1, page2, page3, page4, page5);

app.listen(8080, () => {
    console.log("Server started.");
});