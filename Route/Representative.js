const express = require('express');
const { Representative } = require('../Model/Representative');
const router = express.Router();
router.post('/insert',async function(req,res){
        let represent = new Representative({name:req.body.name,phone:req.body.phone,possition:req.body.possition,image: req.body.image})
        represent = await represent.save();
        res.send(represent);
})

module.exports = router;