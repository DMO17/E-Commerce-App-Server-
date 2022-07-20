const { Router } = require("express");
const { getCart } = require("../../controller/api/cart");

const { authMiddleware } = require("../../util/auth");

const router = Router();

router.get("/:id", getCart);

module.exports = router;
