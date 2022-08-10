const { Router } = require("express");
const {
  getCart,
  addProductToCart,
  deleteProductFromCart,
} = require("../../controller/api/cart");

const { authMiddleware } = require("../../util/auth");

const router = Router();

router.get("/:id", authMiddleware, getCart);

router.put("/:id", authMiddleware, addProductToCart);

router.put("/delete/:id", authMiddleware, deleteProductFromCart);

module.exports = router;
