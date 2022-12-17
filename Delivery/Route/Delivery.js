const express = require('express');
const router = express.Router();

//------------ Importing Controllers ------------//
const deliveryAdmin = require('../Controller/DeliveryAdmin');

//------------ create ------------//
router.post('/', deliveryAdmin.createDelivery);

//------------ update ------------//
router.put('/:id', deliveryAdmin.updateDelivery);

//------------ get ------------//
router.get('/', deliveryAdmin.getDelivery);

//------------ get ------------//
router.get('/all', deliveryAdmin.getAll);


module.exports = router;