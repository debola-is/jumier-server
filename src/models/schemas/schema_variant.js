import { Schema } from 'mongoose';

const variantSchema = Schema({
    
    variantName: {
        type: String,
        required: true,
    },
    price:  {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    }
});

export default variantSchema;