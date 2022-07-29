const { Product } = require("../models");

const productController = {
  getAllProducts(req, res) {
    Product.find({})
      .then((dbProductsData) => res.json(dbProductsData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  getsProductByID({ params }, res) {
    Product.findOne({ _id: params.id })
      .then((dbProductsData) => {
        if (!dbProductsData) {
          res.status(400).json({
            message: `No product found with this id, please try again`,
          });
          return;
        }
        res.json(dbProductsData);
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json(err);
      });
  },
  // created a product
  createProduct({ body }, res) {
    Product.create(body)
      .then((dbProductsData) => res.json(dbProductsData))
      .catch((err) => res.status(400).json(err));
  },

  // updates a Product by id
  updateProduct({ params, body }, res) {
    Product.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then(dbProductsData => {
        if (!dbProductsData) {
          res.status(404).json({
            message: `No product found with this id, please try again.`,
          });
          return;
        }
        res.json(dbProductsData);
      })
      .catch((err) => res.status(400).json(err));
  },

  // deletes a product by id
  deleteProduct({ params }, res) {
    Product.findOneAndDelete({ _id: params.id })
      .then(dbProductsData => {
        if (!dbProductsData) {
          res.status(404).json({
            message: "No product found with this id, please try again",
          });
          return;
        }
        res.json(dbProductsData);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = productController;
