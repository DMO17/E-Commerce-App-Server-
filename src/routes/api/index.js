const { Router } = require("express");
const user = require("./user");
const product = require("./product");
const cart = require("./cart");

const router = Router();

router.use("/user", user);

router.use("/product", product);

router.use("/cart", cart);

module.exports = router;
