const express = require('express')
const router = express.Router()
const fs = require("fs")

router.get("/page4", function (req, res){
    res.send("page4");
});

module.exports = router;