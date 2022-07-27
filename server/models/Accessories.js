const { Schema, model } = require('mongoose');
const AccessoriesSchema = new Schema(
    {
        AccessoriesName: {
            type: String,
            trim: true,
            required: 'accessory Name should be required'
        },
        AccessoriesType: {
            type: String,
            trim: true,
            required: 'Please enter a type of accessory'
        },
        AccessoriesQuanityInStock: {
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
module.exports = Accessories;