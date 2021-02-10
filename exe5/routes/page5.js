const express = require('express')
const router = express.Router()
const fs = require("fs")

router.get("/page5", function (req, res){
    res.send("page5");
});

module.exports = router;