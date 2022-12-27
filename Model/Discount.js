const Joi = require('joi');
const mongoose = require('mongoose');
const { Product } = require('./Product');
const Schema = mongoose.Schema;

const Discount = mongoose.model('Discount',new mongoose.Schema({
    percent:{
        type: Number,
        require: true,
        min: 1,
        max: 100,
    },
    date_create:{
        date:{
            type: String
        },
        time:{
            type: String
        }
    },
    status:{
        type: Boolean,
        default: false
    },
    dateEnd:{
        date:{
            type: String
        },
        time:{
            type: String
        }
    },
    listProduct: [{
        type: Schema.Types.ObjectId,
        ref: Product,
    }
    ]
},{ versionKey: false }));
// function validateDiscount(discount){
//     const schema = Joi.object({
//         name: Joi.string().min(2).max(100).required()
//     });
//     return schema.validate(category)
// }
exports.Discount = Discount;
// exports.validateCate = validateCate;
