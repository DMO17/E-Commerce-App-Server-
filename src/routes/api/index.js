const { Router } = require("express");
const user = require("./user");
const product = require("./product");
const cart = require("./cart");
const order = require("./order");

const router = Router();

router.use("/user", user);

router.use("/products", product);

router.use("/cart", cart);

router.use("/order", order);

module.exports = router;
