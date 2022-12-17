const express = require('express');
const router = express.Router();
const paymentMethod = require('../Controller/PaymentMethod.js')



router.post('/', paymentMethod.createPaymentMethod)

router.get('/', paymentMethod.getPaymentMethod)

router.put('/:id', paymentMethod.updatePaymentMethod)

router.delete('/:id', paymentMethod.deletePaymentMethod)

module.exports = router;