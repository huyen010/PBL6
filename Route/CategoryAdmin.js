const express = require("express");
const mongoose = require("mongoose");
const { cloudinary } = require("../storage");
const upload = require("../multer");
const admin = require("../middleware/admin1");

const router = express.Router();
// const auth = require('../middleware/auth');
const CateAdmin = require("../Controller/CateAdmin");
// const CheckRole = require('../middleware/admin');

// // get list category
// router.get('/',auth,CheckRole('readAny','Category'),CateAdmin.GetListCate);
// //get by Id
// router.get('/detail/:id',auth,CheckRole('readAny','Category'),CateAdmin.GetCateDetail);
// // thêm category
// router.post('/insert',auth,CheckRole('createAny','Category'),CateAdmin.InsertCate)
// // update cate
// router.put('/update/:id',auth,CheckRole('updateAny','Category'),CateAdmin.UpdateCate)
// // Delete cate
// router.delete('/delete/:id',auth,CheckRole('deleteAny','Category'),CateAdmin.deleteCate)

// get list category
router.get("/all", admin, CateAdmin.GetListCate);
//get by Id
router.get("/detail/:slug", admin, CateAdmin.GetCateDetail);
// thêm category
router.post("/insert", admin, CateAdmin.InsertCate);
// update cate
router.put("/update/:slug", admin, CateAdmin.UpdateCate);
// Delete cate
router.delete("/delete/:id", admin, CateAdmin.deleteCate);
module.exports = router;
