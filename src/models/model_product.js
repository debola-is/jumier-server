import { Schema, model } from 'mongoose';
import ratingSchema from './schemas/schema_rating';


const productSchema = Schema({
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
    ratings: [ratingSchema],
    variants: [variantSchema],

})

const Product = model('Product', productSchema);
export default {Product, productSchema};