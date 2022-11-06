const Joi = require('joi');
const mongoose = require('mongoose');
const Account = require('./Account');
const { Commune } = require('./Commune');
const Schema = mongoose.Schema;

const Bill = mongoose.model('Bill',new mongoose.Schema({
    id_account:{
        type: Schema.Types.ObjectId,
        ref: Account,
        required: true
    },
    product:[{
        id_product:{
            type: Schema.Types.ObjectId,
            ref: Product,
            // required: true
        },
        size: {
            type: Schema.Types.ObjectId,
            ref: Size,
            // required: true
        },
        color: {
            type: Schema.Types.ObjectId,
            ref: Color,
            // required: true
        },
        number: {
            type: Number,
            // required:true
        }
    }],
    weight:{
        type: Number,
        default:0
    },
    totalPrice:{
        type: Number,
        default:0
    },
    productPrice:{
        type: Number,
        default:0
    },
    shipPrice:{
        type: Number,
        default:0
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    Address:{
        street: {
            type: String
        },
        id_commune:{
            type: Schema.Types.ObjectId,
            ref : Commune
        }
    }
},{ versionKey: false }));
// function validateCart(Cart){
//     const schema = Joi.object({
//         name: Joi.string().min(2).max(100).required()
//     });
//     return schema.validate(Cart)
// }
exports.Cart = Cart;
// exports.validateCart = validateCart;
