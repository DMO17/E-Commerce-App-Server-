const { Router } = require("express");
const {
  deleteProduct,
  getAllProducts,
  getProductById,
  createProduct,
} = require("../../controller/api/product");
const { authMiddleware } = require("../../util/auth");

const router = Router();

router.get("/", getAllProducts);

router.get("/:id", getProductById);

router.post("/", authMiddleware, createProduct);

router.delete("/:id", authMiddleware, deleteProduct);

module.exports = router;
