const express = require('express');
const router = express.Router();
const staff = require('../Controller/Staff.js')
const admin = require('../middleware/admin1');


router.get('/', admin, staff.getAllStaff)

router.get('/:id', staff.getStaff)

router.put('/:id', admin, staff.updateStaff)

router.delete('/:id', admin, staff.deleteStaff)

module.exports = router;