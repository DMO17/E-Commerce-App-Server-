const { Cart } = require("../../models");

const getCart = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Cart.findOne({ userId: id });

    if (!cart) {
      console.log(
        `[ERROR]: Failed to get cart | cart with id ${id} does'nt exist`
      );
      return res.json({ success: false, error: "Failed to get cart" });
    }

    await cart.populate([
      {
        path: "userId",
      },
      {
        path: "products",
        populate: {
          path: "productId",
        },
      },
    ]);

    return res.json({ success: true, cart });
  } catch (error) {
    console.log(`[ERROR]: Failed to get cart | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get cart" });
  }
};

const addProductToCart = async (req, res) => {
  try {
    const { id } = req.params;
    const { size, productId, cartProductId, quantity } = req.body;

    const cart = await Cart.findOne({ userId: id });

    if (!cart) {
      console.log(
        `[ERROR]: Failed to get cart | cart with id ${id} does'nt exist`
      );
      return res
        .status(400)
        .json({ success: false, error: "Failed to get cart" });
    }

    if (size && productId && quantity) {
      const updateCartData = { size, productId, quantity };

      await Cart.findOneAndUpdate(
        { userId: id },
        { $push: { products: updateCartData } },
        { new: true }
      );

      return res.json({ success: true });
    }

    if (cartProductId && quantity) {
      await Cart.findOneAndUpdate(
        { userId: id, "products._id": cartProductId },
        { $set: { "products.$.quantity": quantity } },
        {
          new: true,
          useFinedAndModify: false,
        }
      );

      return res.json({ success: true });
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to update cart | ${error.message}`);
    return res.json({ success: false, error: "Failed to cart product" });
  }
};

const deleteProductFromCart = async (req, res) => {
  try {
    const { id } = req.params;
    const { cartProductId } = req.body;

    const cart = await Cart.findOne({ userId: id });

    if (!cart) {
      console.log(
        `[ERROR]: Failed to delete product from cart | cart with id ${id} does'nt exist`
      );
      return res
        .status(400)
        .json({ success: false, error: "Failed to delete product from cart" });
    }

    await Cart.findOneAndUpdate(
      { userId: id },
      { $pull: { products: { _id: cartProductId } } },
      { new: true }
    );

    return res.json({ success: true });
  } catch (error) {
    console.log(
      `[ERROR]: Failed to delete product from cart | ${error.message}`
    );
    return res.json({
      success: false,
      error: "Failed to delete product from cart",
    });
  }
};

module.exports = { getCart, addProductToCart, deleteProductFromCart };
