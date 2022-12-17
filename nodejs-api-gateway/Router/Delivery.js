const express = require('express');
const router = express.Router();
const deliveries = require('../Controller/Delivery.js')

router.post('/', deliveries.createDelivery)

router.get('/', deliveries.getDelivery)

router.get('/all', deliveries.getAllDelivery)

router.put('/:id', deliveries.updateDelivery)

module.exports = router;