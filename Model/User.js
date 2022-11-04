const mongoose = require('mongoose');
const Joi = require('joi');
const Schema = mongoose.Schema;
const Account = require('./Account');
// const Account = require('../models/Account');
Joi.objectId = require('joi-objectid')(Joi);

//------------ User Schema ------------//
const UserSchema = new mongoose.Schema({
    fullname: {
        type: String
    },
    id_account: {
        type: Schema.Types.ObjectId,
        ref: Account
    },
    address: {
        id_commune: {
            type: String,
        },
        street: {
            type: String,
        }
    },
    phone: {
        type: String,
    },
    gender: {
        type: Boolean,
        default: false
    },
}, { versionKey: false });

const User = mongoose.model('User', UserSchema);

module.exports = User;