const { model, Schema } = require("mongoose");

const cartSchema = {};

const schema = new Schema(userSchema, { timestamps: true });

const Cart = model("user", schema);

module.exports = Cart;
