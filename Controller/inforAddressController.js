const InforAddress = require('../Model/InforAddress');


//------------ Create ------------//
exports.createInforAddress = (req, res) => {
    const name = (req.body.name);
    const id_account = req.user.id;
    const phone = (req.body.phone);
    const address = (req.body.address);
    const role = (req.body.role);
    InforAddress.findOne({ role: role }).then(inforAddress => {
        if (inforAddress) {
            res.status(400).json({
                message: 'Role is already exist',
                status: false
            });
        } else {
            const newInforAddress = new InforAddress({
                name,
                id_account,
                address,
                phone,
                role
            });
            newInforAddress.save();

            res.status(200).json({
                message: "success",
                inforAddress: newInforAddress,
                status: true
            });
        }
    })
}


//------------ update ------------//
exports.updateInforAddress = async(req, res) => {
    const name = (req.body.name);
    const phone = (req.body.phone);
    const role = (req.body.role);
    var address = (req.body.address);

    InforAddress.findOne({ role: role }).then(inforAddress => {
        if (inforAddress) {
            res.status(400).json({
                message: 'Role is already exist',
                status: false
            });
        } else {
            const id_account = req.user.id;
            var inforAddress = InforAddress.findOne({ id_account: id_account });
            var id = inforAddress.id;

            inforAddress = InforAddress.findByIdAndUpdate(id, { name: name, phone: phone, address: address, role: role });

            inforAddress = InforAddress.findOne({ id_account: id_account });

            if (!inforAddress) {
                res.status(404).json({
                    message: 'Not availble',
                    status: false
                });
            } else {
                res.status(200).json({
                    message: 'success',
                    user: inforAddress,
                    status: true
                });
            }
        }
    })
}


//------------ get user ------------//
exports.getInforAddresss = async(req, res) => {
    const id_account = req.user.id;
    var inforAddress = await InforAddress.find({ id_account: id_account });
    if (!inforAddress) {
        res.status(404).json({
            message: 'Not availble',
            status: false
        });
    }
    res.status(200).json({
        message: 'success',
        inforAddress: inforAddress,
        status: true
    });
}

//------------ delete user ------------//
exports.deleteInforAddresss = async(req, res) => {
    const inforAddress = await InforAddress.findByIdAndDelete(req.params.id);

    if (!inforAddress) {
        res.status(404).json({
            message: 'Not availble',
            status: false
        });
    }
    res.status(200).json({
        message: 'success',
        status: true
    });
}