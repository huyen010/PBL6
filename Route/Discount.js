const express = require("express");
const { Discount } = require("../Model/Discount");
var schedule = require("node-schedule");
const { Product } = require("../Model/Product");
const router = express.Router();
router.get("/type/:type", async function (req, res) {
  try {
    let listDiscount = [];
    if (req.params.type === 1) {
      listDiscount = await Discount.find({ status: true });
    }
    if (req.params.type === 2) {
      listDiscount = await Discount.find({ status: false });
    }
    res.status(200).send({ discounts: listDiscount });
  } catch (ex) {
    res.status(400).send({ message: "error" });
  }
});
router.post("/insert", async function (req, res) {
  try {
    let discount = new Discount({
      percent: req.body.percent,
      time: req.body.time,
      listProduct: req.body.listProduct,
    });
    await discount.save();
    discount.listProduct.map(async function (element) {
      return await Product.findByIdAndUpdate(element, {
        discount: req.body.percent,
      });
    });
    const id_dc = discount._id
    res.status(200).send({ message: "success" });
    // const d = new Date();
    // d.setHours(d.getMinutes + 1);
    // schedule.scheduleJob(d, async function () {
    //   let dc = await Discount.findOneAndUpdate({_id:id_dc},{status:false})
    //   discount.listProduct.map(async function (element) {
    //     return await Product.findByIdAndUpdate(element, {
    //       discount: 0,
    //     });
    //   });
    // });
  } catch (ex) {
    console.log(ex)
    res.status(400).send({ message: "error" });
  }
});
router.delete("/delete/:id", async function (req, res) {
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
router.put("/update/:id", async function (req, res) {
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
