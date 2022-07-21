const stripe = require("stripe")(process.env.STRIPE_KEY);
const { Order } = require("../../models");

const orderProducts = async (req, res) => {
  try {
    const { userId, cartId, amount, address } = req.body;

    if (!userId && !cartId && !amount && !address) {
      console.log(
        `[ERROR]: Failed to place order  | All the fields are required`
      );
      return res
        .status(400)
        .json({ success: false, error: "Failed to place order" });
    }

    await Order.create({
      userId,
      cartId,
      amount,
      address,
    });

    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to place order | ${error.message}`);
    return res
      .status(500)
      .json({ success: failed, error: "Failed to create product" });
  }
};

const stripePayment = (req, res) => {
  try {
    const { tokenId, amount } = req.body;

    if (!tokenId && !amount) {
      console.log(
        `[ERROR]: Failed to stripe payment  | All the fields are required`
      );
      return res
        .status(400)
        .json({ success: false, error: "Failed to stripe payment" });
    }

    const payment = stripe.charges.create({
      source: tokenId,
      amount,
      currency: "gbp",
    });

    res.json({ success: true, payment });
  } catch (error) {
    console.log(`[ERROR]: Failed stripe payment | ${error.message}`);
    return res
      .status(500)
      .json({ success: failed, error: "Failed stripe payment" });
  }
};

module.exports = { orderProducts, stripePayment };
