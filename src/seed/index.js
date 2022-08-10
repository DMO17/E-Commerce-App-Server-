require("dotenv").config();
const { Product } = require("../models");
const { products } = require("./data");

const mongoose = require("mongoose");

const seed = async () => {
  try {
    const mongoDbUrl = process.env.MONGODB_URL;

    await mongoose.connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("[INFO] : Successfully connected to db");

    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Product Data seeded successfully");
  } catch (error) {
    console.log(`Failed to seed database | ${error.message}`);
  }

  process.exit(0);
};

seed();
