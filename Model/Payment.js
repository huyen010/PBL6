const Joi = require('joi');
const mongoose = require('mongoose');
const Payment = mongoose.model('Payment',new mongoose.Schema({
    name:{
        type: String,
        require: true,
        minlength: 2,
        maxlength: 100,
        unique: true
    }
},{ versionKey: false }));

exports.Payment = Payment;
