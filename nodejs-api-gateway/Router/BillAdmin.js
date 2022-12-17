const express = require('express');
const router = express.Router();
const billAdmin = require('../Controller/BillAdmin.js')
const auth = require('../middleware/auth');



router.get('/all/:page', billAdmin.getAllBill)

router.put('/update/:id',  billAdmin.updateBill)

router.post('/cancel/:id', billAdmin.cancelBill)

router.post('/update-many', billAdmin.updateManyBill)

router.get('/type/:status/:delivery/:page', billAdmin.getBillInfor)


module.exports = router;