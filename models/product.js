const { Schema, model } = require("mongoose");

const storeProducts = new Schema({
  productCategory: {
    // make it either clothing or accessories
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
  productLink: {
    type: String
  }, 
});

const Product = model('Product', storeProducts);

module.exports = Product;
