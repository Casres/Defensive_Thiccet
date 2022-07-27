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

  createProduct({ body }, res) {
    product.create(body)
      .then((dbProductsData) => res.json(dbProductsData))
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = productController;
