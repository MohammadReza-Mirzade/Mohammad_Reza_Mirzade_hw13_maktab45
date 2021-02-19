const express = require('express')
const router = express.Router()
const fs = require("fs")

router.get("/page3", function (req, res){
    res.sendFile(path.join(__dirname, '../public', 'index3.html'));
});

module.exports = router;