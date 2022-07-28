const { Schema, model } = require('mongoose');

const storeItems = new Schema({
    itemName: {
        type: String
    },
    brandName: {
        type: String
    }, 
    itemSize: {
        type: String,
        default: 'Medium'
    }, 
    categoryName: {
        type: String
    }
});