const express = require('express');
const router = express.Router();
const home = require("./home");
const about = require("./aboutUs");
const contact = require("./contactUs");
const error = require("./error");

router.get('/', function (req, res){
    res.redirect('/home');
});
router.get("/home", home);
router.get("/about", about);
router.get("/contact", contact);
router.use(error);

module.exports = router;