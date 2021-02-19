const express = require('express');
const router = express.Router();
const path = require("path");

router.use("/", function (req, res){
    res.sendFile(path.join(__dirname, '../views', 'aboutUs.html'));
});

module.exports = router;