const { Schema, model } = require("mongoose");

const storeItems = new Schema({
  itemCategory: {
    // make it either clothing or accessories
  },
  itemName: {
    type: String,
  },
  brandName: {
    type: String,
  },
  itemSize: {
    type: String,
    default: "Medium",
  },
  itemPrice: {
    type: Number,
  },
});

const Product = model('Product', storeItems);

module.exports = Product;
