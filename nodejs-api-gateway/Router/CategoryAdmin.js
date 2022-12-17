const express = require('express');
const router = express.Router();
const categoryAdmin = require('../Controller/CategoryAdmin.js')
const auth = require('../middleware/auth');


router.get('/all', categoryAdmin.getAllCategory)

router.get('/detail/:slug', categoryAdmin.getCategory)

router.post('/insert', categoryAdmin.createCategory)

router.put('/update/:slug', categoryAdmin.updateCategory)

router.delete('/delete/:id', categoryAdmin.deleteCategory)

module.exports = router;