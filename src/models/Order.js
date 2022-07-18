const { model, Schema } = require("mongoose");

const orderSchema = {
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  cartId: {
    type: Schema.Types.ObjectId,
    ref: "cart",
  },
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  status: { type: String, default: "pending" },
};

const schema = new Schema(userSchema, { timestamps: true });

const Order = model("user", schema);

module.exports = Order;
