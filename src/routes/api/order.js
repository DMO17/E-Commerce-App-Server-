const { Router } = require("express");
const { stripePayment, orderProducts } = require("../../controller/api/order");
const { authMiddleware } = require("../../util/auth");
const router = Router();

router.post("/payment", stripePayment);

router.post("/", authMiddleware, orderProducts);

module.exports = router;
