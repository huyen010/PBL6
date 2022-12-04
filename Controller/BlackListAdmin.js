const auth = require('../middleware/auth');
const BlackList = require('../Model/BlackList');



//------------ Create ------------//
exports.createBlackList = async(req, res) => {
    try {
        const id_account = (req.body.id_account);

        var newBlackList = new BlackList({
            id_account: id_account
        });
        newBlackList = await newBlackList.save();
        res.status(200).json({
            message: "success",
            blackList: newBlackList,
            status: true
        });
    } catch (e) {
        res.send(e);
    }
}

exports.getBlackList = async function(req, res) {
    try {
        const blackList = await BlackList.find().populate('blackList.id_account', ['name'])
        res.status(200).json({
            message: "success",
            blackList: blackList,
            status: true
        });
    } catch (e) {
        res.send(e);
    }
}

exports.deleteBalckList = async function(req, res) {
    try {
        const blackList = await BlackList.findByIdAndRemove(req.params.id);
        if (!blackList) return res.status(404).send({ message: 'Not availble' });
        res.send({ message: 'Success' });
    } catch (e) {
        res.send(e);
    }
}