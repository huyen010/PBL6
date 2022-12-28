const express = require("express");
const { Discount } = require("../Model/Discount");
var schedule = require("node-schedule");
const { Product } = require("../Model/Product");
const router = express.Router();
const admin = require("../middleware/admin1");

router.get("/all", async function (req, res) {
  try {
    const listDiscount = await Discount.find({});
    res.status(200).send({ discounts: listDiscount });
  } catch (ex) {
    res.status(400).send({ message: "error" });
  }
});
router.post("/insert", admin, async function (req, res) {
  try {
    let discount = new Discount({
      percent: req.body.percent,
      date_create: req.body.date_create,
      time: req.body.time,
      dateEnd: req.body.dateEnd,
      listProduct: req.body.listProduct,
    });
    await discount.save();
    const id_dc = discount._id
    res.status(200).send({ message: "success" });
    const dayarr1 = discount.date_create.date.split('-')
    const timearr1 = discount.date_create.time.split(':')
    const d1 = new Date(parseInt(dayarr1[0]), parseInt(dayarr1[1])-1, parseInt(dayarr1[2]), timearr1[0], timearr1[1], 0, 0);
    schedule.scheduleJob(d1, async function () {
      let dc = await Discount.findOneAndUpdate({_id:id_dc},{status:true})
      discount.listProduct.map(async function (element) {
        return await Product.findByIdAndUpdate(element, {
          discount: req.body.percent,
        });
      });
    });
    const dayarr = discount.dateEnd.date.split('-')
    const timearr = discount.dateEnd.time.split(':')
    const d = new Date(parseInt(dayarr[0]), parseInt(dayarr[1])-1, parseInt(dayarr[2]), timearr[0], timearr[1], 0, 0);
    schedule.scheduleJob(d, async function () {
      let dc = await Discount.findOneAndUpdate({_id:id_dc},{status:false})
      discount.listProduct.map(async function (element) {
        return await Product.findByIdAndUpdate(element, {
          discount: 0,
        });
      });
    });
  } catch (ex) {
    console.log(ex)
    res.status(400).send({ message: "error" });
  }
});
router.delete("/delete/:id", admin, async function (req, res) {
  try {
    const id = req.params.id;
    let dc = await Discount.findByIdAndDelete(id);
    dc.listProduct.map(async function (element) {
        return await Product.findByIdAndUpdate(element, {
          discount: 0,
        });
      });
    res.status(200).send({ message: "success" });
  } catch (ex) {
    res.status(400).send({ message: "error" });
  }
});
router.put("/update/:id", admin, async function (req, res) {
  try {
    const id = req.params.id;
    const dc = await Discount.findByIdAndUpdate(id,{status:false})
    dc.listProduct.map(async function (element) {
        return await Product.findByIdAndUpdate(element, {
          discount: 0,
        });
      });
    res.status(200).send({message:'success'})
  } catch (ex) {
    res.status(400).send({message:'error'})
  }
});
module.exports = router;
