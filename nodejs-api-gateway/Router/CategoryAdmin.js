const express = require('express');
const router = express.Router();
const categoryAdmin = require('../Controller/CategoryAdmin.js')
const admin = require('../middleware/admin1');

router.get('/all', categoryAdmin.getAllCategory)

router.get('/detail/:slug', categoryAdmin.getCategory)

router.post('/insert', admin, categoryAdmin.createCategory)

router.put('/update/:slug', admin, categoryAdmin.updateCategory)

router.delete('/delete/:id', admin, categoryAdmin.deleteCategory)

module.exports = router;