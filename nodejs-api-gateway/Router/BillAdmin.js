const express = require('express');
const router = express.Router();
const billAdmin = require('../Controller/BillAdmin.js')
const auth = require('../middleware/auth');
const staffOrAdmin = require('../middleware/staffOrAdmin');


router.get('/all/:page', billAdmin.getAllBill)

router.put('/update/:id', staffOrAdmin,  billAdmin.updateBill)

router.post('/cancel/:id', staffOrAdmin, billAdmin.cancelBill)

router.post('/update-many', staffOrAdmin, billAdmin.updateManyBill)

router.get('/type/:status/:delivery/:page', staffOrAdmin, billAdmin.getBillInfor)


module.exports = router;