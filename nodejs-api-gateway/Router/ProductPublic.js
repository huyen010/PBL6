const express = require('express');
const router = express.Router();
const productPublic = require('../Controller/ProductPublic')



router.get('/list/:slug/:page', productPublic.getListProduct)

router.get('/count/:slug', productPublic.getCountProduct)

router.post('/search/:slug/:page/:sort', productPublic.postSearch)

router.get('/detail/:slug', productPublic.getDetail)

router.get('/wish-list/:page', productPublic.getWishList)

router.get('/search/:slug/:search/:page', productPublic.postSearch)


module.exports = router;