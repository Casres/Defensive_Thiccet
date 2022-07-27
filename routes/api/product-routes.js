const router = require("express").Router();
const {
  getAllProducts,
  getsProductByID,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../../controllers/product-controller");

router.route("/")
.get(getAllProducts)
.post(createProduct);

router.route("/:id")
.get(getsProductByID)
.put(updateProduct)
.delete(deleteProduct);

module.exports = router;
