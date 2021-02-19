const express = require('express');
const router = express.Router();
const path = require("path")

router.use("/", function (req, res){
    res.status(404);
    res.format({
        html: function () {
            res.sendFile(path.join(__dirname, '../public', '404.html'));
        },
        json: function () {
            res.json({ error: 'Not found' })
        },
        default: function () {
            res.type('txt').send('Not found')
        }
    })
});

module.exports = router;