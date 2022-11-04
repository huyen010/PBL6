const express = require('express');
const { Supply} = require('../Model/Supply');

const router = express.Router();
router.post('/insert',async function(req,res){
        let supply = new Supply({name:req.body.name,phone:req.body.phone,street:req.body.street,id_commune:req.body.id_commune,id_representative:req.body.id_representative});
        supply = await supply.save();
        res.send(supply);
})
router.post('/delete/:id',async function(req,res){
        let supply = await Supply.findById(req.params.id);
        if(supply.listProduct.length > 0){
                res.send('Supply has products, cant be delete')
        }else{
                res.send('Delete successful')
        }
        supply = await supply.save();
        res.send(supply);
})
router.get('/all',async function(req,res){
        const supplies = await Supply.find().populate('id_representative',['name'])
        return res.send(supplies);
})
module.exports = router;