const express = require('express');
const auth = require('../middleware/auth');
const staffOrAdmin = require('../middleware/staffOrAdmin');
const router = express.Router();

//------------ Importing Controllers ------------//
const deliveryAdmin = require('../Controller/DeliveryAdmin');

//------------ create ------------//
router.post('/', staffOrAdmin, deliveryAdmin.createDelivery);

//------------ update ------------//
router.put('/:id', staffOrAdmin, deliveryAdmin.updateDelivery);

//------------ get ------------//
router.get('/', deliveryAdmin.getDelivery);


module.exports = router;