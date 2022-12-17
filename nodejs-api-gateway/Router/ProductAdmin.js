const express = require('express');
const router = express.Router();
const productAdmin = require('../Controller/ProductAdmin')
const auth = require('../middleware/auth');


router.post('/insert', productAdmin.createProduct)

router.put('/update/:id', productAdmin.updateProduct)

router.post('/sell-product/:id', productAdmin.createProductSell)

router.get('/detail/:id', productAdmin.getProductDetail)

router.delete('/delete/:id', productAdmin.deleteProduct)

router.get('/:slug/:search/:page', productAdmin.getProducBySlug)

router.put('/:slug/:page', productAdmin.getProducBySlugAndPage)

router.post('/discount', productAdmin.createDiscount)

router.post('/properties', productAdmin.createProperties)

module.exports = router;