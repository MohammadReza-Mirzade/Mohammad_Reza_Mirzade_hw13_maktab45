const express = require('express')
const router = express.Router()
const fs = require("fs")

router.get("/page3", function (req, res){
    res.send("page3");
});

module.exports = router;