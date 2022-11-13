const express = require('express');
const auth = require('../middleware/auth');
const staffOrAdmin = require('../middleware/staffOrAdmin');
const router = express.Router();

//------------ Importing Controllers ------------//
const deliveryAdmin = require('../Controller/DeliveryAdmin');

//------------ create ------------//
router.post('/', deliveryAdmin.createDelivery);

//------------ update ------------//
router.put('/:id', deliveryAdmin.updateDelivery);

//------------ get ------------//
router.get('/', deliveryAdmin.getDelivery);


module.exports = router;