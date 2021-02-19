const express = require('express')
const router = express.Router()
const path = require("path")

router.get("/page:page", function (req, res){
    if( +req.params["page"] < 5 &&  +req.params["page"] > 0) {
        res.sendFile(path.join(__dirname, '../public', 'index' + req.params["page"] + '.html'));
    } else {
        res.status(404)
        res.send("404, not found.")
    }
});

module.exports = router;