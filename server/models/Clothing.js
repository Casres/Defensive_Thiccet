const { Schema, model } = require('mongoose');
const ClothingSchema = new Schema(
    {
        ClothingName: {
            type: String,
            trim: true,
            required: 'clothing Name should be required'
        },
        ClothingType: {
            type: String,
            trim: true,
            required: 'Please enter a type of clothing'
        },
        ClothingQuanityInStock: {
            type: Int32Array,
            trim: true,
            required: 'stock quantity is required'
        },
        createdTime: {
            type: Date,
            default: Date.now
          },
    }
);
module.exports = Clothing;