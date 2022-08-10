const { model, Schema } = require("mongoose");

const orderSchema = {
  userId: {
    type: Schema.Types.ObjectId,
    ref: "accounts",
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
        default: 1,
      },
    },
  ],
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  status: { type: String, default: "pending" },
};

const schema = new Schema(orderSchema, { timestamps: true });

const Order = model("order", schema);

module.exports = Order;
