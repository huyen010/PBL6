const express = require('express');
const admin = require('../middleware/admin1');
const router = express.Router();

//------------ Importing Controllers ------------//
const paymentMethod = require('../Controller/paymentMethodController');

//------------ create ------------//
router.post('/', admin, paymentMethod.createPaymentMethod);

//------------ update ------------//
router.put('/:id', admin, paymentMethod.editPaymentMethod);

//------------ get ------------//
router.get('/', paymentMethod.getPaymentMethod);

//------------ delete ------------//
router.delete('/:id', admin, paymentMethod.deletePaymentMethod);


module.exports = router;