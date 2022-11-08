const express = require('express');
const { Color } = require('../Model/Color');
const { Product } = require('../Model/Product');
const { Size } = require('../Model/Size');
const { Stock } = require('../Model/Stock');
const { Supply } = require('../Model/Supply');
const router = express.Router();

router.post('/insert',async function(req,res){
        let stock = new Stock({dateReceive:req.body.dateReceive,receive:req.body.receive,remain:req.body.receive,id_supply:req.body.id_supply,status:req.body.status,dateCreate:req.body.dateCreate,totalPrice:req.body.totalPrice});
        stock = await stock.save();
        let supply = await Supply.findById(req.body.id_supply);
        var arrSize = [];
        var arrColor = [];
        for(i=0 ; i < req.body.receive.length; i ++){
                supply.listProduct.push(req.body.receive[i].id_product);
                for( j = 0; j < req.body.receive[i].receive.length; j ++){
                        arrSize.push(req.body.receive[i].receive[j].size)
                        arrColor.push(req.body.receive[i].receive[j].color)
                }
                const listS = await Size.find({ "_id": { "$in": arrSize } });
                console.log(listS);
                const listC = await Color.find({ "_id": { "$in": arrColor } });
                console.log(listC);
                await Product.findByIdAndUpdate(req.body.receive[i].id_product,{ $push: { size: listS,color:listC}})
        }
        await supply.save();
        res.send(stock);
})

module.exports = router; 