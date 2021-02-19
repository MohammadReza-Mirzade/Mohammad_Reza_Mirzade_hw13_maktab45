const express = require('express')
const router = express.Router()
const fs = require("fs")


router.get("/getAllUsers", function (req, res){
    res.sendFile(path.join(__dirname, "./file/users.json"))
});



module.exports = router;
