const User = require('../Model/User');
const { Commune } = require('../Model/Commune');
const auth = require('../middleware/auth');
const { District } = require('../Model/District');


//------------ Create ------------//
exports.createUser = (req, res) => {
    const fullname = (req.body.fullname);
    const id_account = (req.body.id_account);
    const phone = (req.body.phone);
    const gender = (req.body.gender);
    const address = (req.body.address);
    const urlImage = (req.body.urlImage);

    User.findOne({ phone: phone }).then(user => {
        if (user) {
            res.status(400).json({
                message: 'phone already registered',
                status: false
            });
        } else {
            const newUser = new User({
                fullname,
                id_account,
                address,
                phone,
                gender,
                urlImage
            });
            newUser.save();
            res.status(200).json({
                message: "success",
                user: newUser,
                status: true
            });
        }
    })
}

//------------ update ------------//
exports.updateUser = async(req, res) => {
    const fullname = (req.body.fullname);
    const phone = (req.body.phone);
    const gender = (req.body.gender);
    var address = (req.body.address);
    var urlImage = (req.body.urlImage);

    const id_account = req.user.id;
    var user = await User.findOne({ id_account: id_account });
    var id = user.id;

    var user = await User.findByIdAndUpdate(id, { fullname: fullname, phone: phone, gender: gender, address: address, urlImage: urlImage });

    user = await User.findOne({ id_account: id_account });

    if (!user) {
        res.status(404).json({
            message: 'Not availble',
            status: false
        });
    }

    var id_commune = user.address.id_commune;
    if (id_commune) {
        var district = await Commune.findById(id_commune);
        var id_district = district.id_district;
        var province = await District.findById(id_district);
        address = {
            id_province: province.id_province,
            id_district: id_district,
            id_commune: id_commune,
            street: user.address.street
        }
    } else {
        address = {
            id_province: "",
            id_district: "",
            id_commune: "",
            street: ""
        }
    }
    var users = {
        _id: user._id,
        id_account: id_account,
        fullname: user.fullname,
        email: user.email,
        phone: user.phone,
        gender: user.gender,
        address: address,
        urlImage: user.urlImage
    }

    res.status(200).json({
        message: 'success',
        user: users,
        status: true
    });
}

//------------ get user ------------//
exports.getUser = async(req, res) => {
    const id_account = req.user.id;
    var user = await User.findOne({ id_account: id_account });
    if (!user) {
        res.status(404).json({
            message: 'Not availble',
            status: false
        });
    }
    var id_commune = user.address.id_commune;
    if (id_commune) {
        var district = await Commune.findById(id_commune);
        var id_district = district.id_district;
        var province = await District.findById(id_district);
        address = {
            id_province: province.id_province,
            id_district: id_district,
            id_commune: id_commune,
            street: user.address.street
        }
    } else {
        address = {
            id_province: "",
            id_district: "",
            id_commune: "",
            street: ""
        }
    }
    var users = {
        _id: user._id,
        id_account: id_account,
        fullname: user.fullname,
        email: user.email,
        phone: user.phone,
        gender: user.gender,
        address: address,
        urlImage: user.urlImage
    }

    res.status(200).json({
        message: 'success',
        user: users,
        status: true
    });
}

//------------ delete user ------------//
exports.deleteUser = async(req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
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