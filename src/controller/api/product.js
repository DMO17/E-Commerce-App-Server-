const { Product } = require("../../models");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    return res.json({ success: true, products });
  } catch (error) {
    console.log(`[ERROR]: Failed to get products | ${error.message}`);
    return res
      .status(500)
      .json({ success: failed, error: "Failed to get products" });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      console.log(
        `[ERROR]: Failed to get product | Product with id ${id} does'nt exist`
      );
      return res
        .status(400)
        .json({ success: false, error: "Failed to get product" });
    }

    return res.json({ success: true, product });
  } catch (error) {
    console.log(`[ERROR]: Failed to get product | ${error.message}`);
    return res.json({ success: failed, error: "Failed to get product" });
  }
};

const createProduct = async (req, res) => {
  try {
    if (!req.user.isAdmin) {
      console.log(
        `[ERROR]: Failed to create Product | Only an admin is authorized to create a product`
      );
      return res
        .status(400)
        .json({ success: false, error: "Failed to create Product" });
    }

    const { title, description, img, category, size, color, price, inStock } =
      req.body;

    if (
      !title &&
      !description &&
      !img &&
      !category &&
      !size &&
      !color &&
      !price
    ) {
      console.log(
        `[ERROR]: Failed to create Product | All the fields are required`
      );
      return res
        .status(400)
        .json({ success: false, error: "Failed to create Product" });
    }

    await Product.create({
      title,
      description,
      img,
      category,
      size,
      color,
      price,
      inStock,
    });

    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to create product | ${error.message}`);
    return res
      .status(500)
      .json({ success: failed, error: "Failed to create product" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    if (!req.user.isAdmin) {
      console.log(
        `[ERROR]: Failed to delete Product | Only an admin is authorized to delete a product`
      );
      return res
        .status(400)
        .json({ success: false, error: "Failed to delete Product" });
    }

    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      console.log(
        `[ERROR]: Failed to delete product | Product with id ${id} does'nt exist`
      );
      return res
        .status(400)
        .json({ success: false, error: "Failed to delete product" });
    }

    await Product.findByIdAndRemove(id);

    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete product | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to delete product" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
};
