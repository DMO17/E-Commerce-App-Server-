const { model, Schema } = require("mongoose");

const productSchema = {
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
  category: { type: Array },
  size: { type: String, required: true },
  color: { type: String, required: true },
  price: { type: Number, required: true },
};

const schema = new Schema(userSchema, { timestamps: true });

const Product = model("product", schema);

module.exports = Product;
