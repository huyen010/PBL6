const auth = require('../middleware/auth');
const Delivery = require('../Model/Delivery');

// const { District } = require('../Model/District');


//------------ Create ------------//
exports.createDelivery = async(req, res) => {
    const name = (req.body.name);
    const price = (req.body.price);
    const note = (req.body.note);
    const status = 0;

    var newDelivery = new Delivery({
        name: name,
        price: price,
        status: status,
        note: note
    });
    newDelivery = await newDelivery.save();
    res.status(200).json({
        message: "success",
        delivery: newDelivery,
        status: true
    });
}

//------------ update ------------//
exports.updateDelivery = async(req, res) => {
    const name = (req.body.name);
    const price = (req.body.price);
    const status = (req.body.status);
    const note = (req.body.note);

    var delivery = await Delivery.findByIdAndUpdate(req.params.id, {
        name: name,
        price: price,
        status: status,
        note: note
    });

    delivery = await Delivery.findById(req.params.id);
    res.status(200).json({
        message: "success",
        delivery: delivery,
        status: true
    });
}

exports.getDelivery = async function(req, res) {
    const delivery = await Delivery.find({ status: 0 })
    res.status(200).json({
        message: "success",
        delivery: delivery,
        status: true
    });
}