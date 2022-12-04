const express = require('express');
const auth = require('../middleware/auth');
const staffOrAdmin = require('../middleware/staffOrAdmin');
const router = express.Router();

//------------ Importing Controllers ------------//
const blackListAdmin = require('../Controller/BlackListAdmin');

//------------ create ------------//
router.post('/', blackListAdmin.createBlackList);

//------------ update ------------//
router.delete('/:id', blackListAdmin.deleteBalckList);

//------------ get ------------//
router.get('/', blackListAdmin.getBlackList);



module.exports = router;