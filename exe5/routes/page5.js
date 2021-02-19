const express = require('express')
const router = express.Router()
const fs = require("fs")

router.get("/page5", function (req, res){
    res.sendFile(path.join(__dirname, '../public', 'index5.html'));
});

module.exports = router;