const express = require('express');
const router = express.Router();
const user = require('../Controller/User')
const auth = require('../middleware/auth');



router.post('/', user.createUser)

router.get('/',auth, user.getUser)

router.put('/', auth, user.updateUser)

router.delete('/:id', user.deleteUser)

module.exports = router;