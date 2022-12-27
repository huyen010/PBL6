const express = require("express");
const router = express.Router();
const { Bill } = require("../Model/Bill");
const { Order_history } = require("../Model/Order_history");
const { Product } = require("../Model/Product");
const admin = require("../middleware/admin1");
router.get("/order/:month", admin, async function (req, res) {
  const month = parseInt(req.params.month);
  let year = new Date().getFullYear();
  // if(month==12){
  //     nextMonth = 1;
  //     year = year + 1
  // }
  var d = new Date(year, month, 0);
  const orderOfMonth = [];
  for (let i = 0; i < d.getDate() - 1; i++) {
    const startDate = year + "-" + month + "-" + (i + 1).toString();
    let endDate = year + "-" + month + "-" + (i + 2).toString();
    const totalOrder = await Bill.find({
      isCancel:false,
      createAt: {
        $gte: startDate,
        $lt: endDate,
      },
    }).countDocuments();
    const orderOfday = await Bill.find({
      isCancel:false,
      createAt: {
        $gte: startDate,
        $lte: endDate,
      },
    }).select("totalPrice");
    let sum = 0;
    orderOfday.forEach((element) => {
      sum = sum + element.totalPrice;
    });
    orderOfMonth.push({
      day: "D" + (i + 1).toString(),
      number: totalOrder,
      revenue: sum,
    });
  }
  res.status(200).send({ order: orderOfMonth });
});
router.get("/number-status", admin, async function (req, res) {
  let number = [];
  const status = [
    "Chờ xác nhận",
    "Đã xác nhận",
    "Đang giao",
    "Đã giao hàng thành công",
  ];
  for (var size = 1; size <= 4; size++) {
    const numberSTT1 = await Order_history.find({
      history: { $size: size },
      isCancel: { status: false },
    }).countDocuments();
    number.push({ status: status[size - 1], number: numberSTT1 });
  }
  res.status(200).send({ number: number });
});
router.get("/top-product", admin, async function (req, res) {
  let products = await Product.find({})
    .sort({ sold: -1 })
    .limit(5)
    .select(["name", "price", "id_cate", "sold"])
    .populate("id_cate", "name");
  res.status(200).send({ products: products });
});
module.exports = router;
