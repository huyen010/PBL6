const express = require('express');
const router = express.Router();
const comment = require('../Controller/Comment.js');
const auth = require('../middleware/auth.js');



router.post('/', auth, comment.createComment)

router.put('/:id', auth, comment.updateComment)

router.get('/:id_product', comment.getCommentByProduct)

module.exports = router;