const Joi = require('joi');
const mongoose = require('mongoose');
const Account = require('./Account');
const { Product } = require('./Product');
const Comment = mongoose.model('Comment', new mongoose.Schema({
    id_account: {
        type: Schema.Types.ObjectId,
        ref: Account,
        required: true
    },
    id_product: {
        type: [Schema.Types.ObjectId],
        ref: Product,
        required: true
    },
    urlImage: {
        type: [String],
        // required: true
    },
    content: {
        type: String,
        // required: true
    }
}, { versionKey: false }));

exports.Comment = Comment;