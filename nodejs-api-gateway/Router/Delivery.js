const express = require('express');
const router = express.Router();
const deliveries = require('../Controller/Delivery.js')
const admin = require('../middleware/admin1');

router.post('/', admin,  deliveries.createDelivery)

router.get('/', deliveries.getDelivery)

router.get('/all', deliveries.getAllDelivery)

router.put('/:id', admin, deliveries.updateDelivery)

module.exports = router;