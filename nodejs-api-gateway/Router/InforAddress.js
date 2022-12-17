const express = require('express');
const router = express.Router();
const inforAddress = require('../Controller/InforAddress.js');
const auth = require('../middleware/auth.js');



router.post('/', auth,  inforAddress.createInforAddress)

router.get('/', auth, inforAddress.getInforAddress)

router.put('/:id', auth, inforAddress.updateInforAddress)

router.delete('/:id', auth, inforAddress.deleteInforAddress)

module.exports = router;