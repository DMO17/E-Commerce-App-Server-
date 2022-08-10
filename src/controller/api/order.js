const stripe = require("stripe")(process.env.STRIPE_KEY);
const { Order, Cart } = require("../../models");

const orderProducts = async (req, res) => {
  try {
    const { userId, amount, address } = req.body;

    const cart = await Cart.findOne({ userId });

    if (!userId && !amount && !address) {
      console.log(
        `[ERROR]: Failed to place order  | All the fields are required`
      );
      return res
        .status(400)
        .json({ success: false, error: "Failed to place order" });
    }

    await Order.create({
      userId,
      amount,
      address,
      products: cart.products,
    });

    await Cart.findOneAndUpdate(
      userId,
      { $set: { products: [] } },
      { new: true }
    );

    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to place order | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create product" });
  }
};

const stripePayment = async (req, res) => {
  try {
    const { tokenId, amount } = req.body;

    if (!tokenId && !amount) {
      console.log(
        `[ERROR]: Failed to stripe payment  | All the fields are required`
      );
      return res.json({ success: false, error: "Failed to stripe payment" });
    }

    const payment = await stripe.charges.create({
      source: tokenId,
      amount,
      currency: "gbp",
    });

    console.log(payment);

    if (!payment) {
      console.log(`[ERROR]: Failed stripe payment | Incorrect details`);
      return res.json({ success: failed, error: "Failed stripe payment" });
    }

    return res.json({ success: true, payment });
  } catch (error) {
    console.log(`[ERROR]: Failed stripe payment | ${error.message}`);
    return res.json({ success: false, error: "Failed stripe payment" });
  }
};

module.exports = { orderProducts, stripePayment };
