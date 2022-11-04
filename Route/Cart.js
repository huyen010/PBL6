const express = require('express');
const { Cart} = require('../Model/Cart');

const router = express.Router();
router.post('/insert',async function(req,res){
    let Cart = new Cart({id_user:req.body.id})
})
// router.get('/all',async function(req,res){
//         const supplies = await Supply.find()
//         return res.send(supplies);
// })
router.post('/', async function(req,res){
    // lấy token từ middleware
    //decode token ra userID
    const iduser = 1 
    const cart = Cart.findOne({id_user:iduser}).populate('product.id_product',['name','price']).populate('product.properties.size',['name','description']).populate('product.properties.color',['name']);
    res.status(200).send(cart);
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