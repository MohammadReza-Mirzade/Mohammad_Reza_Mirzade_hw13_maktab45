const express = require('express')
const router = express.Router()
const path = require("path")

router.get("/page2", function (req, res){
    res.sendFile(path.join(__dirname, '../public', 'index2.html'));
});

module.exports = router;