const Infor = require('../Model/Infor');


exports.getInfor = async function(req, res) {
    const infor = await Infor.find();
    res.status(200).json({
        message: "success",
        comment: infor,
        status: true
    });
}