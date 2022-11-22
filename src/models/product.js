const mongoose = require('mongoose');
const ratingSchema = require('./rating');


const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    brand: {
        type: String,
        required: true,
        trim: true,
    },
    
    category: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    images: {
            type: [String],
            required: true,
    },
    subCategories: {
            type: [String],
            required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    oldPrice: {
        type: Number,
        required: true,
    },
    isExpressAvailable: {
        type: Boolean,
        required: true,
        default: false,
    },
    ratings: [ratingSchema],variants: [variantSchema],

})

const Product = mongoose.model('Product', productSchema);
module.exports = {Product, productSchema};