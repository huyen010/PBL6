const mongoose = require('mongoose');
const Joi = require('joi');
const { Bill } = require('./Bill');
const { Status } = require('./Status');
Joi.objectId = require('joi-objectid')(Joi);
const Schema = mongoose.Schema;
const Order_history = mongoose.model('Order_history',new mongoose.Schema({
    id_bill: {
        type: Schema.Types.ObjectId,
        ref: Bill
    },
    history: [
        {
            id_status: {
                type: Schema.Types.ObjectId,
                ref: Status,
            },
            date:{
                type: Date
            }
        }
    ]
},{versionKey: false }))
exports.Order_history = Order_history;