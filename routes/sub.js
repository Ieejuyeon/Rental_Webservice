const express = require("express");
const router = express.Router();

router.get('/', function(req, res){
    console.log("sub get")
    res.render("sub");
});

router.post('/', function(req, res){
    console.log("sub post");
    res.redirect("/");
})
module.exports = router;