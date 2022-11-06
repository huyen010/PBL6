const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

//------------ Importing Controllers ------------//
const deliveryAdmin = require('../Controller/DeliveryAdmin');

//------------ create ------------//
router.post('/', deliveryAdmin.createDelivery);

//------------ update ------------//
router.put('/:id', auth, deliveryAdmin.updateDelivery);

//------------ get ------------//
router.get('/', deliveryAdmin.getDelivery);


module.exports = router;