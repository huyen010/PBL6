const Comment = require('../Model/Comment');
// const { Commune } = require('../Model/Commune');
const auth = require('../middleware/auth');
// const { District } = require('../Model/District');


//------------ Create ------------//
exports.createComment = (req, res) => {
    const id_account = req.user.id;
    const urlImage = (req.body.urlImage);
    const content = (req.body.content);
    const id_product = (req.body.id_product);


    const newComment = new Comment({
        id_account,
        id_product,
        urlImage,
        content
    });
    newComment.save();
    res.status(200).json({
        message: "success",
        user: newComment,
        status: true
    });
}

//------------ update ------------//
exports.updateComment = async(req, res) => {
    // const id_account = req.user.id;
    // const urlImage = (req.body.urlImage);
    // const content = (req.body.content);
    // const id_product = (req.body.id_product);

    // var comment = await Comment.findByIdAndUpdate(req.params.id, { fullname: fullname, phone: phone, gender: gender, address: address, id_account });

    // user = await User.findOne({ id_account: id_account });

    // if (!user) {
    //     res.status(404).json({
    //         message: 'Not availble',
    //         status: false
    //     });
    // }

    // var id_commune = user.address.id_commune;
    // if (id_commune) {
    //     var district = await Commune.findById(id_commune);
    //     var id_district = district.id_district;
    //     var province = await District.findById(id_district);
    //     address = {
    //         id_province: province.id_province,
    //         id_district: id_district,
    //         id_commune: id_commune,
    //         street: user.address.street
    //     }
    // } else {
    //     address = {
    //         id_province: "",
    //         id_district: "",
    //         id_commune: "",
    //         street: ""
    //     }
    // }
    // var users = {
    //     _id: user._id,
    //     id_account: id_account,
    //     fullname: user.fullname,
    //     email: user.email,
    //     phone: user.phone,
    //     gender: user.gender,
    //     address: address
    // }

    // res.status(200).json({
    //     message: 'success',
    //     user: users,
    //     status: true
    // });
}

//------------ get user ------------//
exports.getComment = async(req, res) => {
    var comments = await Comment.find();
    if (!comments) {
        res.status(200).json({
            message: 'Not availble',
            status: false
        });
    }
    res.status(200).json({
        message: 'success',
        user: users,
        status: true
    });
}

//------------ delete user ------------//
// exports.deleteCmment = async(req, res) => {
//     const user = await User.findByIdAndDelete(req.params.id);

//     if (!user) {
//         res.status(404).json({
//             message: 'Not availble',
//             status: false
//         });
//     }
//     res.status(200).json({
//         message: 'success',
//         status: true
//     });
// }