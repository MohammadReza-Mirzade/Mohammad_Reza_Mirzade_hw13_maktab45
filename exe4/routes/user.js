const express = require('express')
const router = express.Router()
const fs = require("fs")


router.post("/getUser", function (req, res){
    fs.readFile('./file/users.json', 'utf8', (err, data) => {
        if (err){ console.log(err.message); }
        else{
            console.log(req);
            //res.send(JSON.parse(data).users[req.body.name]);
        }
    });
});



module.exports = router;
