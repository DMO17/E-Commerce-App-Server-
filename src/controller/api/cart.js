const Cart = require("../../models/Cart");

const getCart = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Cart.findOne({ userId: id });

    await cart.populate("userId");

    return res.json({ success: true, cart });
  } catch (error) {
    console.log(`[ERROR]: Failed to get cart | ${error.message}`);
    return res
      .status(500)
      .json({ success: failed, error: "Failed to get cart" });
  }
};

module.exports = { getCart };
