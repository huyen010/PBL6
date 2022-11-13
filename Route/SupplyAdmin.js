const express = require('express');
const { populate } = require('../Model/Account');
const { Representative } = require('../Model/Representative');
const { Supply} = require('../Model/Supply');

const router = express.Router();
router.post('/insert',async function(req,res){
        console.log(req.body)
        let representative = new Representative(req.body.representative);
        representative = await representative.save();
        // let supply = new Supply({name:req.body.name,phone:req.body.phone,street:req.body.street,id_commune:req.body.id_commune,id_representative:req.body.id_representative});
        let supply = new Supply({id_representative:representative._id,id_commune:req.body.supply.id_commune,
        name: req.body.supply.name, phone: req.body.supply.phone, street:req.body.supply.street,
        image: req.body.supply.image});
        supply = await supply.save();
        res.send(supply);
})
router.delete('/delete/:id',async function(req,res){
        let supply = await Supply.findById(req.params.id);
        if(supply.listProduct.length > 0){
                res.send({message: 'Supply has products, cant be delete'})
        }else{
                let representative = await Representative.findByIdAndDelete(supply.id_representative);
                supply = await supply.delete();
                res.send({message: 'Delete successful'})
        }
})
router.get('/all/:page',async function(req,res){
        const page = req.params.page
        try{
                const supplies = await Supply.find({}).limit(10).skip((page-1)*16).populate('id_representative',['name','phone','possition','image'])
                .populate('listProduct','name').populate({path: 'id_commune', select: 'name',
                populate : {path:'id_district',select:'name', populate:{path:'id_province',select:'name'}}} )
                let count = await Supply.countDocuments();
                count = parseInt((count-1)/10) + 1
                return res.status(200).send({message: 'success',supplies: supplies, count: count});
        }catch(ex){
                res.status(400).send({message:'error'})
        }
})
router.get('/detail/:id',async function(req,res){
        const supply = await Supply.findById(req.params.id).populate({path: 'id_commune', select: 'name',
        populate : {path:'id_district',select:'name', populate:{path:'id_province',select:'name'}}} )
        return res.send({supply: supply});
})
router.get('/representative/:id',async function(req,res){
        const representative = await Representative.findById(req.params.id);
        return res.send({representative:representative});
})
router.put('/update/:id',async function(req,res){
        let supply = await Supply.findByIdAndUpdate(req.params.id,{id_commune:req.body.supply.id_commune,
                name: req.body.supply.name, phone: req.body.supply.phone, street:req.body.supply.street,
                image: req.body.supply.image},{new:true});
        let representative = await Representative.findByIdAndUpdate(supply.id_representative,
        {phone:req.body.representative.phone, name: req.body.representative.name, possition: req.body.representative.possition});
        // let supply = new Supply({name:req.body.name,phone:req.body.phone,street:req.body.street,id_commune:req.body.id_commune,id_representative:req.body.id_representative});
        res.send(supply);
})
module.exports = router;