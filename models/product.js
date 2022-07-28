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
    price: Number
  },
  productLink: {
    URL: String
  }, 
});

const Product = model('Product', storeProducts);

module.exports = Product;
