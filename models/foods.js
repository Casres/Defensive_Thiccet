const { Schema, model } = require('mongoose');

const FoodSchema = new Schema(
    {
        foodName: {
            type: String,
            trim: true,
            required: 'Food Name should be required'
        },
        FoodQuanityInStock: {
            type: Int32Array,
            trim: true,
            required: 'stock quantity is required'
        }
    }
)