const express = require('express');
const auth = require('../middleware/auth');
const { Cart} = require('../Model/Cart');

const router = express.Router();
router.get('/',auth,async function(req,res){
    let cart = await Cart.findOne({id_user:req.user.id})
    res.status(400).send(cart);
})
router.post('/insert',auth,async function(req,res){
    let cart = await Cart.findOne({id_user:req.user.id})
    const listPD = cart.product;
    let pd = listPD.filter(listPD => listPD.id_product.toString() === req.body.id_product
    & listPD.size.toString() === req.body.size & listPD.color.toString() === req.body.color);
    if(pd.length == 0){
        cart.product.push({id_product:req.body.id_product,color:req.body.color,
        size: req.body.size, number: req.body.number});
        await cart.save();
    }else{
        let cartupdate = await Cart.updateOne({"id_user":req.user.id,"product": { "$elemMatch": { "id_product": req.body.id_product, 
        "size": req.body.size, "color": req.body.color}}},
            {'$inc': {
                'product.$.number': req.body.number,
            }
        })
    }
    const cartAfter = await Cart.findOne({id_user:req.user.id}).populate('product.id_product',['name','price']).populate('product.color',['name']).populate('product.size',['name'])
    res.status(200).send({cart: cartAfter});
})
// router.get('/all',async function(req,res){
//         const supplies = await Supply.find()
//         return res.send(supplies);
// })
router.post('/update',auth, async function(req,res){
    // lấy token từ middleware
    //decode token ra userID
    let cartupdate = await Cart.updateOne({"id_user":req.user.id,"product": { "$elemMatch": { "id_product": req.body.id_product, 
        "size": req.body.size, "color": req.body.color}}},
            {'$set': {
                'product.$.number': req.body.number,
            }
        })
    const cartAfter = await Cart.findOne({id_user:req.user.id}).populate('product.id_product',['name','price']).populate('product.color',['name']).populate('product.size',['name'])
    res.status(200).send({cart:cartAfter});
})
router.post('/',async function(req,res){
    // lấy token từ middleware
    //decode token ra userID
    const iduser = 1
    try{
        let cart = Cart.findOne({id_user:iduser})
        
    }
    catch(ex){

    }
})
module.exports = router;