const Comment = require('../Model/Comment');
const Rate = require('../Model/Rate');
const auth = require('../middleware/auth');
const Account = require('../Model/Account');
// const { District } = require('../Model/District');


//------------ Create ------------//
exports.createComment = async(req, res) => {
    const id_account = req.user.id;
    const urlImage = (req.body.urlImage);
    const content = (req.body.content);
    const id_product = (req.body.id_product);

    const star = (req.body.star);
    var rate = await Rate.findOne({ id_product: id_product });

    if (rate) {
        var sum = rate.sum + star;
        var amount = rate.amount + 1;
        var starRate = sum / amount;
        var rate = await Rate.findByIdAndUpdate(rate.id, {
            rate: starRate,
            sum: sum,
            amount: amount
        });
    } else {
        var newRate = new Rate({
            id_product: id_product,
            rate: star,
            sum: star,
            amount: 1
        });
        newRate = await newRate.save();
    }

    var newComment = new Comment({
        id_account: id_account,
        id_product: id_product,
        urlImage: urlImage,
        content: content,
        star: star
    });
    newComment = await newComment.save();
    res.status(200).json({
        message: "success",
        user: newComment,
        status: true
    });
}

//------------ update ------------//
exports.updateComment = async(req, res) => {
    const urlImage = (req.body.urlImage);
    const content = (req.body.content);
    const star = (req.body.star);

    var comment = await Comment.findById(req.params.id);
    var sum = comment.star;

    comment = await Comment.findByIdAndUpdate(req.params.id, {
        urlImage: urlImage,
        content: content,
        star: star
    });
    comment = await Comment.findById(req.params.id);

    var rate = await Rate.findOne({ id_product: comment.id_product });
    var sum = rate.sum + star - sum;
    var amount = rate.amount;
    var starRate = sum / amount;
    var rate = await Rate.findByIdAndUpdate(rate.id, {
        rate: starRate,
        sum: sum
    });


    res.status(200).json({
        message: "success",
        user: comment,
        status: true
    });
}

exports.getComment = async function(req, res) {
    const comment = await Comment.find({ id_product: req.params.id_product })
    res.status(200).json({
        message: "success",
        comment: comment,
        status: true
    });
}