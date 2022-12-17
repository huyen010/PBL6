const express = require('express');
const router = express.Router();
const infor = require('../Controller/Infor.js')



router.get('/', infor.getInfor)

module.exports = router;