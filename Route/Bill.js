const express = require('express');
const auth = require('../middleware/auth');
const {Bill} = require('../Model/Bill');
const { Status } = require('../Model/Status');
const router = express.Router();
router.post('/insert',auth,async function(req,res){
    try{
        let totalPrice = req.body.shipPrice + req.body.productPrice
        let bill = new Bill({id_account:req.user.id, product:req.body.product,
            shipPrice:req.body.shipPrice,productPrice:req.body.shipPrice,totalPrice:totalPrice,
            createAt:Date.now(),address:req.body.address,id_delivery: req.body.delivery,payment_method:req.body.payment_method})
        await bill.save();
        res.status(200).send({message:"success"});
    }catch(ex){
        // res.status(400).send(ex);
        console.log(ex);
    }
})
module.exports = router;
