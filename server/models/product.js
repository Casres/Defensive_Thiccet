const { Schema, model } = require("mongoose");

const storeProducts = new Schema({
  productCategory: {
    // make it either clothing or accessories
  },
  generalCategory: {
    type: String
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
    price: Number 
  },
  productLink: {
    URL: String 
  }, 
  inStock: {
    type: Number
  },
});

const Product = model('Product', storeProducts);

module.exports = Product;
