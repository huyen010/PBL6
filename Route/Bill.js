const express = require('express');
const auth = require('../middleware/auth');
const Bill = require('../Model/Cart');

const router = express.Router();
router.get('/',auth,async function(req,res){
    let cart = await Cart.findOne({id_account:req.user.id}).populate('product.id_product',['name','price','urlImage','discount'])
    .populate('product.color',['name']).populate('product.size',['name','description'])
    let price = 0;
    for(let i=0; i < cart.product.length; i++){

        price = price + (cart.product[i].id_product.price*(100-cart.product[i].id_product.discount))*cart.product[i].number;
    }
    res.status(400).send({cart:cart,price:price});
})