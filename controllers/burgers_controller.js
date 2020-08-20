const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get('/',function(req,res){
    res.redirect("/burgers");
});
//GET
router.get('/burgers',function(req,res){
    burger.select(function(data){
        var hbsObject = { burgers: data };
        res.render('index',hbsObject);
    });
});
//POST
router.post("/burgers/create",function(req,res){
    burger.create(["burger_name"],[req.body.burger_name],function(result){
        res.redirect("/burgers");
    });
});
//PUT
router.put('/burgers/update/:id', function(req,res){
    var condition = `id = ${req.params.id}`;
    burger.update({ 'devoured': req.body.devoured },condition,function(data){
        res.redirect('/burgers');
    });
});









module.exports = router;