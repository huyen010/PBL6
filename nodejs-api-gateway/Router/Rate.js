const express = require('express');
const router = express.Router();
const rate = require('../Controller/Rate.js')

router.get('/:id_product', rate.getRate)

module.exports = router;