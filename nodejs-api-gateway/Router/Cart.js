const express = require('express');
const router = express.Router();
const cart = require('../Controller/Cart.js')
const auth = require('../middleware/auth');


router.get('/', auth, cart.getCart)

router.post('/insert', auth, cart.createCart)

router.put('/update', auth, cart.updateCart)

router.delete('/delete/:id', auth, cart.deleteCart)

module.exports = router;