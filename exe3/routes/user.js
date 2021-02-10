const express = require('express')
const router = express.Router()


router.get("/", function (req, res){
    res.send("<pre>user:<br>    <a href='user/page1'>page1</a><br>    <a href='user/page2'>page2</a></pre>")
});

router.get("/page1", function (req, res) {
    res.send("page1");
});

router.get("/page2", function (req, res) {
    res.send("page2");
});


module.exports = router;
