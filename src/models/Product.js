const { model, Schema } = require("mongoose");

const productSchema = {};

const schema = new Schema(userSchema, { timestamps: true });

const Product = model("user", schema);

module.exports = Product;
