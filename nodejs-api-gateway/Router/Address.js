const express = require('express');
const router = express.Router();
const address = require('../Controller/Address')

router.get('/province', address.getProvince)

router.get('/district/:province', address.getProvince)

router.get('/commune/:district', address.getDistrict)

module.exports = router;