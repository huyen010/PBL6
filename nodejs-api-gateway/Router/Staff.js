const express = require('express');
const router = express.Router();
const staff = require('../Controller/Staff.js')



router.get('/', staff.getAllStaff)

router.get('/:id', staff.getStaff)

router.put('/:id', staff.updateStaff)

router.delete('/:id', staff.deleteStaff)

module.exports = router;