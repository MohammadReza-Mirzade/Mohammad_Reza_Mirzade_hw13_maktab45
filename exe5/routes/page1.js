const express = require('express')
const router = express.Router()
const fs = require("fs")

router.get("/page1", function (req, res){
    res.send("page1");
});

module.exports = router;