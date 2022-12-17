const express = require('express');
const router = express.Router();
const stockAdmin = require('../Controller/StockAdmin')
const auth = require('../middleware/auth');


router.post('/insert', stockAdmin.createStock)

router.get('/all/:page', stockAdmin.getStock)

router.get('/supply/:id/:page', stockAdmin.getSupply)


module.exports = router;