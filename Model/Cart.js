const Joi = require('joi');
const mongoose = require('mongoose');
const { Color } = require('./Color');
const { Product } = require('./Product');
const { Size } = require('./Size');
const { User } = require('./User');
const Schema = mongoose.Schema;

const Cart = mongoose.model('Cart',new mongoose.Schema({
    id_user:{
        type: Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    product:[{
        id_product:{
            type: Schema.Types.ObjectId,
            ref: Product,
            // required: true
        },
        properties:[
            {
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
            }
        ]
    }]
},{ versionKey: false }));
// function validateCart(Cart){
//     const schema = Joi.object({
//         name: Joi.string().min(2).max(100).required()
//     });
//     return schema.validate(Cart)
// }
exports.Cart = Cart;
// exports.validateCart = validateCart;
