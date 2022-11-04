const express = require('express');
const router = express.Router();
const { Commune } = require("../Model/Commune");
const { District } = require('../Model/district');
const { Province } = require('../Model/province');

router.get('/province',async function(req,res){
    const province = await Province.find()
    return res.send(province);
})
router.get('/district/:province',async function(req,res){
    console.log(req.params.province);
    const district = await District.find({id_province:req.params.province})
    return res.send(district);
})
router.get('/commune/:district',async function(req,res){
    const commune = await Commune.find({id_district:req.params.district});
    return res.send(commune);
})
module.exports = router;