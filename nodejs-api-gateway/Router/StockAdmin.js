const express = require('express');
const router = express.Router();
const stockAdmin = require('../Controller/StockAdmin')
const auth = require('../middleware/auth');
const staffOrAdmin = require('../middleware/staffOrAdmin');


router.post('/insert', staffOrAdmin, stockAdmin.createStock)

router.get('/all/:page', staffOrAdmin, stockAdmin.getStock)

router.get('/supply/:id/:page', staffOrAdmin, stockAdmin.getSupply)


module.exports = router;