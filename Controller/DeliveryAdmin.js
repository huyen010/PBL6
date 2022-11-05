const auth = require('../middleware/auth');
const Delivery = require('../Model/Delivery');

// const { District } = require('../Model/District');


//------------ Create ------------//
exports.createDelivery = async(req, res) => {
    const name = (req.body.name);
    const price = (req.body.price);
    const status = 0;

    var newDelivery = new Delivery({
        name: name,
        price: price,
        status: status
    });
    newDelivery = await newDelivery.save();
    res.status(200).json({
        message: "success",
        user: newDelivery,
        status: true
    });
}

//------------ update ------------//
exports.updateDelivery = async(req, res) => {
    const name = (req.body.name);
    const price = (req.body.price);
    const status = (req.body.status);

    var delivery = await Delivery.findByIdAndUpdate(req.params.id, {
        name: name,
        price: price,
        status: status
    });

    delivery = await Delivery.findById(req.params.id);
    res.status(200).json({
        message: "success",
        user: delivery,
        status: true
    });
}

exports.getDelivery = async function(req, res) {
    const delivery = await Delivery.find()
    res.status(200).json({
        message: "success",
        comment: delivery,
        status: true
    });
}