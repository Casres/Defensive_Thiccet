const { Schema, model } = require("mongoose");

const storeProducts = new Schema({
  // either be clothes or accessories 
  generalCategory: {
    type: String
  },
  productCategory: {
    // is it a hat or shirt or accessory item
  },
  productName: {
    type: String
  },
  brandName: {
    type: String
  },
  productSize: {
    type: String,
    // default: "Medium",
  },
  productPrice: {
    type: Number 
  },
  productStock: {
    type: Number
  },
});

const Product = model('Product', storeProducts);

module.exports = Product;
