const jwt = require("jsonwebtoken");
const Account = require("../Model/Account");
require("dotenv").config();

async function staff(req, res, next) {
  const token = req.header("token");
  if (!token) {
    res.status(401).json({
      message: "Access denied. No token provided",
      status: false,
    });
  } else {
    try {
      const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
      req.user = decoded;
      const id_account = req.user.id;
      var account = await Account.findOne({ _id: id_account });
      if (account.id_role == 1) {
        next();
      } else {
        res.status(400).json({
          message: "Account cannot access this page",
          id_role: account.id_role,
          status: false,
        });
      }
    } catch (ex) {
      res.status(400).json({
        message: "Invalid token",
        status: false,
      });
    }
  }
}
module.exports = staff;
