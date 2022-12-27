const express = require('express');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin1');
const router = express.Router();

//------------ Importing Controllers ------------//
const deliveryAdmin = require('../Controller/DeliveryAdmin');

//------------ create ------------//
router.post('/', admin, deliveryAdmin.createDelivery);

//------------ update ------------//
router.put('/:id', admin, deliveryAdmin.updateDelivery);

//------------ get ------------//
router.get('/', deliveryAdmin.getDelivery);


module.exports = router;