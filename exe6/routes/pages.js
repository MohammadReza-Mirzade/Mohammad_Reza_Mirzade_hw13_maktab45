const express = require('express')
const router = express.Router()
const fs = require("fs")

router.get("/page:page", function (req, res){
    res.send("page " + req.params["page"]);
});

module.exports = router;