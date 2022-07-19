const { Router } = require("express");
const user = require("./user");
const product = require("./product");

const router = Router();

router.use("/user", user);

router.use("/product", product);

module.exports = router;
