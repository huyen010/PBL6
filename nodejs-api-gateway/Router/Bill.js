const express = require('express');
const router = express.Router();
const bill = require('../Controller/Bill.js')
const auth = require('../middleware/auth');


router.post('/insert', auth, bill.createBill)
 
router.get('/all', auth, bill.getBill)

router.get('/type/:type', auth, bill.getBillByType)

router.get('/detail/:id', bill.getDetail)

module.exports = router;