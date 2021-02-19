const express = require('express')
const router = express.Router()
const path = require("path")


router.get("/page:page", function (req, res, next){
    if( +req.params["page"] < 7 &&  +req.params["page"] > 0 && Number.isInteger(+req.params["page"])) {
        res.sendFile(path.join(__dirname, '../views', 'page' + req.params["page"] + '.html'));
    } else {
        res.status(404);
        next();
    }
});

module.exports = router;