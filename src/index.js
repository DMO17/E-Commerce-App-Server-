require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;

const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

const init = async () => {
  try {
    app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

    await mongoose.connect(process.env.MONGODBURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("[INFO] : Successfully connected to db");
  } catch (error) {
    console.log(`[ERROR] : Connection to db has failed\ ${error.message}`);
  }
};

init();
