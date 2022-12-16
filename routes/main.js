const express = require("express");
const router = express.Router();

router.get('/', function(req, res){
    console.log('main get');
    res.render("main");
});

router.post('/', function(req, res){
    console.log("main post");
    res.redirect("/sub");
})
module.exports = router;