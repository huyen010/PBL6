const express = require('express');
const { upload } = require('../Config/multer');
const SlugF = require('../Config/slug');
const { Product } = require('../Model/Product');
const cloudinary = require('../Config/storage');
const { Category } = require('../Model/Category');
const { Stock } = require('../Model/Stock');
const { Discount } = require('../Model/Discount');
const Rate = require('../Model/Rate');
const Comment = require('../Model/Comment');
const router = express.Router();
// router.get('/all/:page',async function(req,res){
//     const page = 1
//     if(!req.params.page){
//         page = req.params.page;
//     }
//     const products = await Product.find().limit(16).skip((page-1)*16)
//     res.status(200).send(products)
// })
router.get('/list/:slug/:page',async function(req,res){
    let page = 1;
    let count = 0
    page = req.params.page
    let products = null;
    if(req.params.slug.localeCompare('all')==0){
        products = await Product.find({status: "Đang bán"}).sort({'_id':-1}).limit(16).skip((page-1)*16).populate('size',['name','description']).populate('color',['name']);
        count = await Product.countDocuments({status: "Đang bán"});
    }else{
        const cate = await Category.findOne({slug:req.params.slug});
        products = await Product.find({id_cate:cate._id,status: "Đang bán"}).sort({'_id':-1}).limit(16).skip((page-1)*16).populate('size',['name','description']).populate('color',['name']);
        count = await Product.countDocuments({id_cate:cate._id,status: "Đang bán"});
    } 
    if(count !== 0){
        count = parseInt((count-1)/16) + 1;
    }
    res.status(200).send({products:products,count:count})
})
router.get('/count/:slug',async function(req,res){
    const sl = req.params.slug;
    let pages = 0
    let count = 0
    try{
        if(sl.localeCompare('all')==0){
            count = await Product.countDocuments();
        }else{
            const cate = await Category.findOne({slug:sl});
            count = await Product.countDocuments({id_cate:cate._id});
        }
        if(count !== 0){
            pages = parseInt((count-1)/16) + 1
        }
        return res.status(400).send({count:pages})
    }catch(ex){
        return res.status(400).send({count:pages});
    }
})
router.get('/search/:slug/:search/:page/:sort',async function(req,res){
    const sl = req.params.slug;
    let page = req.params.page
    let products = undefined;
    let sortType = {_id : -1}
    if(req.params.sort == 2) { sortType = { _id : 1 } }
    if(req.params.sort == 3) { sortType = { price : -1 } }
    if(req.params.sort == 4) {sortType = { price : 1 }}
    if(req.params.sort == 5) {sortType = { name : -1 } }
    if(req.params.sort == 6) {sortType = { name : 1 }}
    let count = 0;
    try{
        if(sl.localeCompare('all')==0){
            products = await Product.find({"status": "Đang bán", "name": { "$regex": req.params.search, "$options": "i" } }).sort(sortType).limit(16).skip((page-1)*16)
            .populate('size',['name','description']).populate('color',['name']);
            count = await Product.countDocuments({"status": "Đang bán", "name": { "$regex": req.params.search, 
            "$options": "i" } })
        }else{
            const cate = await Category.findOne({slug:sl});
            products = await Product.find({"status": "Đang bán","id_cate":cate._id ,
            "name": { "$regex": req.params.search, "$options": "i" } }).sort(sortType)
            .limit(16).skip((page-1)*16).populate('size',['name','description'])
            .populate('size',['name','description']).populate('color',['name']);
            count = await Product.countDocuments({"status": "Đang bán", "id_cate": cate._id,"name": { "$regex": req.params.search, 
            "$options": "i" } })
        }
        if(count !== 0) count = parseInt((count-1)/16) + 1
        return res.status(400).send({products:products,count:count},)
    }catch(ex){
        return res.status(400).send({message: "error",status:"false"});
    }
})

router.get('/detail/:slug',async function(req,res){
    let product = undefined;
    let rs = undefined;
    try{
            product = await Product.findOne({slug:req.params.slug}).populate('size',['name','description']).populate('color',['name'])
            if(!product) return res.status(404).send('Sản phẩm không tồn tại');
            const stock = (await Stock.findOne({receive: {$elemMatch: {id_product: (product._id).toString()}}})).receive;
            rs = stock.filter(stock => stock.id_product == (product._id).toString())[0].receive;
            console.log(product._id);
            const rate = await Rate.findOne({id_product:product._id})
            console.log(rate);
            const comment = await Comment.find({ id_product: product._id}).populate('id_account',['name'])
            return res.status(200).send({product: product,rate:rate,comment:comment,number:rs});
    }catch(err){
        return res.status(200).send({product:product,number:rs});
    }
})
// router.get('/wish-list/:slug', async function(req,res){
//     let products = undefined;
//     let rs = undefined;
//     try{
//         const products = await Rate.find({rate : { $gte: 4 }}).sort({rate:1}).
//         limit(16).skip((page-1)*16).populate({path:'id_product',select: ['name',]})populate('size',['name','description']).populate('color',['name']).
//         populate('id_product',)
//     }catch(err){

//     }
// })
// router.get('/number/:idproduct',async function(req,res){
//     try{
//         const stock = (await Stock.findOne({receive: {$elemMatch: {id_product: req.params.idproduct}}})).receive;
//         const rs = stock.filter(stock => stock.id_product == req.params.idproduct)[0].receive;
//         // const nb = rs.filter(rs => rs.size == '635000d3c91b810653035906' & rs.color == '63500315c91b810653035912')[0].number;
//         res.send({number: rs});
//     }catch(err){

//     }
// })
module.exports = router;