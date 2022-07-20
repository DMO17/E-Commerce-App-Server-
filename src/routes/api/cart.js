const { Router } = require("express");
const { getCart, addProductToCart } = require("../../controller/api/cart");

const { authMiddleware } = require("../../util/auth");

const router = Router();

router.get("/:id", authMiddleware, getCart);

router.put("/:id", authMiddleware, addProductToCart);

module.exports = router;
