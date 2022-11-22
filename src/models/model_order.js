import { Schema, model } from 'mongoose';
import { productSchema } from './model_product';

const orderSchema = Schema({
    products: [
        {
           product: productSchema, 
           quantity: {
            type: Number,
            required: true,
           }
        },
    ],
    totalPrice: {
        type: Number,
        required: true
    },
    deliveryAddress: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    timeOfOrder: {
        type: Number,
        required: true,
    },
    status: {
        type: Number,
        default: 0,
    },

});

const Order = model('Order', orderSchema);

export default Order;