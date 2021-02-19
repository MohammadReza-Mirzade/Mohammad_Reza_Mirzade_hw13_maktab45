const express = require('express')
const router = express.Router()
const fs = require("fs")

router.get("/page1", function (req, res){
    res.sendFile(path.join(__dirname, '../public', 'index1.html'));
});

module.exports = router;