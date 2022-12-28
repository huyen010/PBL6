const express = require('express');
const router = express.Router();
const supplyAdmin = require('../Controller/SupplyAdmin.js')
const staffOrAdmin = require('../middleware/staffOrAdmin');


router.post('/insert', staffOrAdmin, supplyAdmin.createSupply)

router.delete('/delete/:id', staffOrAdmin, supplyAdmin.deleteSupply)

router.get('/all/:page', staffOrAdmin, supplyAdmin.getAll)

router.get('/detail/:id', staffOrAdmin, supplyAdmin.getDetail)

router.get('/representative/:id', staffOrAdmin, supplyAdmin.getRepresentative)

router.put('/update/:page', staffOrAdmin, supplyAdmin.updateSupply)

router.get('/product/:id', staffOrAdmin, supplyAdmin.getProduct)

module.exports = router;