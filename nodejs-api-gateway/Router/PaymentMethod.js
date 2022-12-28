const express = require('express');
const router = express.Router();
const paymentMethod = require('../Controller/PaymentMethod.js')
const admin = require('../middleware/admin1');


router.post('/', admin, paymentMethod.createPaymentMethod)

router.get('/', paymentMethod.getPaymentMethod)

router.put('/:id', admin, paymentMethod.updatePaymentMethod)

router.delete('/:id', admin, paymentMethod.deletePaymentMethod)

module.exports = router;