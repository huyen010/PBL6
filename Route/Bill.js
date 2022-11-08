const express = require('express');
const auth = require('../middleware/auth');
const { populate } = require('../Model/Account');
const {Bill} = require('../Model/Bill');
const { Cart } = require('../Model/Cart');
const { Order_history } = require('../Model/Order_history');
const { Stock } = require('../Model/Stock');
const router = express.Router();
async function UpdateStock(product){

    let stock = await Stock.find({'remain.id_product': product.id_product}).sort({'dateReceive':-1})
        stock[0].remain.forEach(function(remain){
            if(remain.id_product == (product.id_product).toString()){
                remain.receive.forEach(function(properties){
                    if(properties.size == (product.size).toString() & properties.color == (product.color).toString()){
                        properties.number = properties.number - product.number;
                    }
                })
            }
        });
        await stock[0].save();
}
router.post('/insert',auth,async function(req,res){
    try{
        let totalPrice = req.body.shipPrice + req.body.productPrice
        let bill = new Bill({id_account:req.user.id, product:req.body.product,
            shipPrice:req.body.shipPrice,productPrice:req.body.shipPrice,totalPrice:totalPrice,
            createAt:Date.now(),info:req.body.info,id_delivery: req.body.delivery,payment_method:req.body.payment_method})
        await bill.save();
        bill.product.forEach(async function(product){
            await UpdateStock(product);
        })
        await Cart.findOneAndUpdate(
            { id_account: req.user.id },
            { $set: { product: [] } },
          );
        let orderhistory = new Order_history({id_bill:bill._id,history:[{id_status:"63691e673f2070927236ba3f",date:Date.now()}]});
        orderhistory = await orderhistory.save();
        res.status(200).send({message:"success",status: true});
    }catch(ex){
        res.status(400).send({message:"error",status:false});
        console.log(ex);
    }
})
router.get('/all',auth,async function(req,res){
    try{
        let orderhistory = await Order_history.find({}).populate({path: 'id_bill',
        match: { id_account: req.user.id}, select: ['info','product','totalPrice','createAt'],
        populate: [{path:'product.id_product',select:'name'},{path:'product.size',select:'name'}
        ,{path:'product.color',select:'name'},{path:'info.address.id_commune',select:'name'}]})
        res.status(200).send({message:"success",bills:orderhistory});
    }catch(ex){
        res.status(400).send({message:"error",status:false});
        console.log(ex);
    }
})
// router.post('/test',async function(req,res){
//     try{
//         let stock = await Stock.find({'remain.id_product':req.body.id_product}).sort({'dateReceive':-1})
//         console.log(stock[0].remain);
//         stock[0].remain.forEach(function(remain){
//             if(remain.id_product == req.body.id_product){
//                 remain.receive.forEach(function(properties){
//                     if(properties.size == req.body.size & properties.color == req.body.color){
//                         properties.number = properties.number - 1;
//                     }
//                 })
//             }
//         });
//         await stock[0].save();
//         res.send(stock);
//     }catch(ex){
//         console.log(ex);
//     }
// })
module.exports = router;
