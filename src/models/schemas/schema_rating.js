import { Schema } from 'mongoose';

const ratingSchema = Schema({
    userId: {
         type: String,
         required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    review:  {
        type: String,
        default: '',
    },
});

export default ratingSchema;