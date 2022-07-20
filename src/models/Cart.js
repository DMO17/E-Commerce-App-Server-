const { model, Schema } = require("mongoose");

const cartSchema = {
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  products: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: "product",
      },
      size: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        quantity: 1,
      },
    },
  ],
};

const schema = new Schema(cartSchema, { timestamps: true });

const Cart = model("cart", schema);

module.exports = Cart;
