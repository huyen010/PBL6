const express = require('express');
const router = express.Router();
const productAdmin = require('../Controller/ProductAdmin')
const staffOrAdmin = require('../middleware/staffOrAdmin');


router.post('/insert', staffOrAdmin, productAdmin.createProduct)

router.put('/update/:id', staffOrAdmin, productAdmin.updateProduct)

router.post('/sell-product/:id', staffOrAdmin, productAdmin.createProductSell)

router.get('/detail/:id', productAdmin.getProductDetail)

router.delete('/delete/:id', staffOrAdmin, productAdmin.deleteProduct)

router.get('/:slug/:search/:page', productAdmin.getProducBySlug)

router.put('/:slug/:page', staffOrAdmin, productAdmin.getProducBySlugAndPage)

router.post('/discount', staffOrAdmin, productAdmin.createDiscount)

router.post('/properties', staffOrAdmin, productAdmin.createProperties)

module.exports = router;