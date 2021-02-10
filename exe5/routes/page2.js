const express = require('express')
const router = express.Router()
const fs = require("fs")

router.get("/page2", function (req, res){
    res.send("page2");
});

module.exports = router;