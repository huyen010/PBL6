const express = require('express');
const router = express.Router();
const staff = require('../middleware/staff');

//------------ Importing Controllers ------------//
const checkStaff = require('../Controller/CheckStaff')

//------------ Logout GET Handle ------------//
router.post('/', staff, checkStaff.checkStaff);

module.exports = router;