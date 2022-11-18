const express = require('express');
const { Color } = require('../Model/Color');
const { Product } = require('../Model/Product');
const { Size } = require('../Model/Size');
const { Stock } = require('../Model/Stock');
const { Supply } = require('../Model/Supply');
const router = express.Router();

router.post('/insert', async function(req, res) {
    try {
        let stock = new Stock({ dateReceive: req.body.dateReceive, receive: req.body.receive, remain: req.body.receive, id_supply: req.body.id_supply, status: req.body.status, dateCreate: req.body.dateCreate, totalPrice: req.body.totalPrice });
        stock = await stock.save();
        let supply = await Supply.findById(req.body.id_supply);
        var arrSize = [];
        var arrColor = [];
        for (i = 0; i < req.body.receive.length; i++) {
            supply.listProduct.push(req.body.receive[i].id_product);
            for (j = 0; j < req.body.receive[i].receive.length; j++) {
                arrSize.push(req.body.receive[i].receive[j].size)
                arrColor.push(req.body.receive[i].receive[j].color)
            }
            const listS = await Size.find({ "_id": { "$in": arrSize } });
            const listC = await Color.find({ "_id": { "$in": arrColor } });
            await Product.findByIdAndUpdate(req.body.receive[i].id_product, { $push: { size: listS, color: listC } })
        }
        await supply.save();
        res.status(200).send({message:'success'});
    } catch (ex) {
        res.status(400).send({message:'error'});
    }
})

router.get('/all/:page', async function(req, res) {
    try {
        const page = req.params.page
        let stock = await Stock.find({}).sort({dateReceive:-1}).limit(16).skip((page - 1) * 16).populate('id_supply',['name'])
        .populate('receive.receive.size',['name']).populate('receive.receive.color','name')
        .populate('receive.id_product',['name'])
        let count = await Stock.countDocuments();
        if(count != 0){
            count = parseInt((count-1)/10) + 1
        }
        res.status(200).send({message:'success',stock:stock, count : count});
    } catch (ex) {
        res.status(400).send({message:'error'});
    }
})
router.get('/supply/:id/:page',async function(req,res){
    try{
        const page = req.params.page
        let stock = await Stock.find({id_supply:req.params.id}).sort({dateReceive:-1})
        .limit(16).skip((page - 1) * 16).populate('id_supply',['name'])
        .populate('receive.receive.size',['name']).populate('receive.receive.color','name')
        .populate('receive.id_product',['name'])
        res.status(200).send({message:'success',stock:stock});

    }catch(ex){
        res.status(400).send({message:'error'});
    }
})
module.exports = router;