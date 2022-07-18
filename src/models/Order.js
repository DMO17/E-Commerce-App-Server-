const { model, Schema } = require("mongoose");

const orderSchema = {};

const schema = new Schema(userSchema, { timestamps: true });

const Order = model("user", schema);

module.exports = Order;
