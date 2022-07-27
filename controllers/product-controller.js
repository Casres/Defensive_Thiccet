const { product } = require("../models");
const productController = {
  getAllProducts(req, res) {
    product
      .find({})
      .then((dbProductsData) => res.json(dbProductsData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  getsProductByID({ params }, res) {
    product
      .findOne({ _id: params.id })
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
    product
      .create(body)
      .then((dbProductsData) => res.json(dbProductsData))
      .catch((err) => res.status(400).json(err));
  },

  // updates a pizza by id
  updateProduct({ params }, res) {
    product
      .findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbProducts) => {
        if (dbProductsData) {
          res
            .status(404)
            .json({
              message: `No product found with this id, please try again.`,
            });
          return;
        }
      })
      .catch((err) => res.status(400).json(err));
  },

  // deletes a product by id
  deleteProduct({ params }, res) {
    products.findOneAndDelete({ _id: params.id })
      .then((dbProductsData) => {
        if (!dbProductsData) {
          res.status(404)
          .json({message: "No product found with this id, please try again"});
          return;
        }
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = productController;
