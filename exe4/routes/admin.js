const express = require('express')
const router = express.Router()
const fs = require("fs")


router.get("/getAllUsers", function (req, res){
    fs.readFile('./file/users.json', 'utf8', (err, data) => {
        if (err){ console.log(err.message); }
        else{
            res.send(JSON.parse(data).users);
        }
    });
});



module.exports = router;
