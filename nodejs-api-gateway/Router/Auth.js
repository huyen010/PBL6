const express = require('express');
const router = express.Router();
const auththe = require('../Controller/Auth.js')
const auth = require('../middleware/auth');


router.post('/register', auththe.register )

router.get('/activate/:token', auththe.activate )

router.post('/forgot', auththe.forgot)

router.post('/reset',auth, auththe.reset)

router.post('/login', auththe.login)

router.get('/logout', auththe.logout)

module.exports = router;