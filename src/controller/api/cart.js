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

const addProductToCart = async (req, res) => {
  try {
    const { id } = req.params;
    const { size, productId } = req.body;

    const cart = await Cart.findById(id);

    if (!cart) {
      console.log(
        `[ERROR]: Failed to get product | Product with id ${id} does'nt exist`
      );
      return res
        .status(400)
        .json({ success: false, error: "Failed to get product" });
    }

    const updateCartData = { size, productId };

    await Cart.findOneAndUpdate(
      { _id: id },
      { $push: { products: updateCartData } },
      { new: true }
    );

    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to update cart | ${error.message}`);
    return res.json({ success: failed, error: "Failed to cart product" });
  }
};

module.exports = { getCart, addProductToCart };
