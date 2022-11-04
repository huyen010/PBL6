const express = require('express');
const router = express.Router();

//------------ Importing Controllers ------------//
const userController = require('../Controller/userController')

//------------ create ------------//
router.post('/', userController.createUser);

//------------ update ------------//
router.put('/', userController.updateUser);

//------------ get ------------//
router.get('/', userController.getUser);

//------------ get ------------//
router.delete('/:id', userController.deleteUser);

module.exports = router;