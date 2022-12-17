const express = require('express');
const router = express.Router();
const supplyAdmin = require('../Controller/SupplyAdmin.js')



router.post('/insert', supplyAdmin.createSupply)

router.delete('/delete/:id', supplyAdmin.deleteSupply)

router.get('/all/:page', supplyAdmin.getAll)

router.get('/detail/:id', supplyAdmin.getDetail)

router.get('/representative/:id', supplyAdmin.getRepresentative)

router.put('/update/:page', supplyAdmin.updateSupply)

router.get('/product/:id', supplyAdmin.getProduct)

module.exports = router;