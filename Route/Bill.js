const express = require('express');
const auth = require('../middleware/auth');
const { populate } = require('../Model/Account');
const { Bill } = require('../Model/Bill');
const { Cart } = require('../Model/Cart');
const { Order_history } = require('../Model/Order_history');
const { Stock } = require('../Model/Stock');
const router = express.Router();
var schedule = require('node-schedule');
// var j = schedule.scheduleJob(myToday, function(){
//   console.log('hello world.');
// });
async function UpdateStock(product) {
    let stock = await Stock.find({ 'remain.id_product': product.id_product }).sort({ 'dateReceive': -1 })
    stock[0].remain.forEach(function(remain) {
        if (remain.id_product == (product.id_product).toString()) {
            remain.receive.forEach(function(properties) {
                if (properties.size == (product.size).toString() & properties.color == (product.color).toString()) {
                    properties.number = properties.number - product.number;
                }
            })
        }
    });
    await stock[0].save();
}
router.post('/insert', auth, async function(req, res) {
    try {
        let totalPrice = req.body.shipPrice + req.body.productPrice
        let bill = new Bill({
            delivery: req.body.delivery,
            id_account: req.user.id,
            product: req.body.product,
            shipPrice: req.body.shipPrice,
            productPrice: req.body.productPrice,
            totalPrice: totalPrice,
            createAt: Date.now(),
            id_info: req.body.id_info,
            payment_method: req.body.payment_method
        })
        await bill.save();
        bill.product.forEach(async function(product) {
            await UpdateStock(product);
        })
        await Cart.findOneAndUpdate({ id_account: req.user.id }, { $set: { product: [] } }, );
        let orderhistory = new Order_history({id_account:req.user.id, id_bill: bill._id, history: [{ id_status: "63691e673f2070927236ba3f", date: Date.now() }] });
        orderhistory = await orderhistory.save();
        res.status(200).send({ message: "success", status: true });
        const d = new Date();
        d.setHours(d.getMinutes + 1);
        schedule.scheduleJob(d, function(){
              console.log('hello world.');
            // });
        })
    } catch (ex) {
        res.status(400).send({ message: "error", status: false });
        console.log(ex);
    }
})

router.get('/all', auth, async function(req, res) {
    console.log('3')

    try{
        let orderhistory = await Order_history.find({id_account:req.user.id, isCancel:{status: false}}).select(['id_bill','history']).populate({path: 'id_bill',
        select: ['id_info','product','totalPrice','createAt','productPrice','shipPrice','payment_method','delivery'],
        populate: [{path:'product.id_product',select:['name','urlImage']},
        {path:'product.size',select:'name'},{path:'product.color',select:'name'},{path:'payment_method',select:'name'}, 
        {path:'delivery',select:'name'},{path:'id_info'
        ,select:['name','phone','address'],populate:[{path:'address.id_province',select:'name'},
        {path:'address.id_district',select:'name'}, {path:'address.id_commune',select:'name'}]}]}).
        populate('history.id_status',['name'])
        res.status(200).send({message:"success",bills:orderhistory});
    }catch(ex){
        res.status(400).send({message:"error",status:false});
        console.log(ex);
    }
})
router.get('/type/:type',auth,async function(req,res){
    try{
        let filter = {id_account:req.user.id, isCancel:{status: false}, history:{$size: req.params.type }}
        let select = ['id_bill','history']
        if(req.params.type == 5){
            filter = {id_account:req.user.id, isCancel:{status: true}}
            select = ['id_bill','history','isCancel']
        }
        let orderhistory = await Order_history.find(filter).select(select).populate({path: 'id_bill',
        select: ['id_info','product','totalPrice','createAt','productPrice','shipPrice','payment_method'],
        populate: [{path:'product.id_product',select:['name','urlImage']},
        {path:'product.size',select:'name'},{path:'product.color',select:'name'},{path:'payment_method',select:'name'},
        {path:'delivery',select:'name'},{path:'id_info'
        ,select:['name','phone','address'],populate:[{path:'address.id_province',select:'name'},
        {path:'address.id_district',select:'name'}, {path:'address.id_commune',select:'name'}]}]}).
        populate('history.id_status',['name'])
        res.status(200).send({message:"success",bill:orderhistory});
    }catch(ex){
        res.status(400).send({message:"error",status:false});
    }
})
router.get('/detail/:id',auth,async function(req,res){
    try{
        let orderhistory = await Order_history.findById(req.params.id).select(['id_bill','history']).populate({path: 'id_bill',
        select: ['id_info','product','totalPrice','createAt','productPrice','shipPrice','payment_method'],
        populate: [{path:'product.id_product',select:['name','urlImage']},
        {path:'product.size',select:'name'},{path:'product.color',select:'name'},{path:'payment_method',select:'name'}, {path:'delivery',select:'name'},
        {path:'id_info',select:['name','phone','address'],populate:[{path:'address.id_province',select:'name'},
        {path:'address.id_district',select:'name'}, {path:'address.id_commune',select:'name'}]}]}).
        populate('history.id_status',['name'])
        res.status(200).send({message:"success",bill:orderhistory});
    }catch(ex){
        res.status(400).send({message:"error",status:false});
    }
})
router.put('/update/:id',async function(req,res){
    try{
        let orderhistory = await Order_history.findByIdAndUpdate(req.params.id,{
            $push: { history: {id_status: req.body.id_status, date: req.body.date} }
        })
        res.status(200).send({message:'success',status:true})
    }catch(ex){
        console.log(ex);
        res.status(400).send({message:'error',status:false})
    }
})
router.put('/cancel/:id', async function(req,res){
    try{
        let orderhistory = await Order_history.findByIdAndUpdate(req.params.id,{
            isCancel: {status: true, date: Date.now(),reason: req.body.reason}
        })
        res.status(200).send({message:'success',status:true})
    }catch(ex){
        console.log(ex);
        res.status(400).send({message:'error',status:false})
    }
})
module.exports = router;
