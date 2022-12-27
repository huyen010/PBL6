const Joi = require('joi');
const mongoose = require('mongoose');
const Account = require('./Account');
const { Order_history } = require('./Order_history');
const Schema = mongoose.Schema;

const Notify = mongoose.model('Notify', new mongoose.Schema({
    content: {
        type: String,
        require: true,
    },
    idBill:{
        type: Schema.Types.ObjectId,
        ref: Order_history
    },
    idAccount:{
        type: Schema.Types.ObjectId,
        ref: Account
    },
    dateCreate:{
        type:Date,
        default:Date.now()
    }
}, { versionKey: false }));

exports.Notify = Notify;