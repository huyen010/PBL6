const express = require('express');
const router = express.Router();
const upload = require('../Controller/Upload.js')



router.post('/upload-image', upload.upload)


module.exports = router;