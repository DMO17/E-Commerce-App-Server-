const { model, Schema } = require("mongoose");

const productSchema = {
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
  type: { type: String, enum: ["Men", "Women", "Kids"] },
  size: [{ type: Array, default: ["XS", "S", "M", "L", "XL"] }],
  color: { type: String, required: true },
  price: { type: Number, required: true },
  inStock: { type: Boolean, default: true },
};

const schema = new Schema(productSchema, { timestamps: true });

const Product = model("product", schema);

module.exports = Product;
