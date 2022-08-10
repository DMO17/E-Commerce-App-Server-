require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

const PORT = process.env.PORT || 3002;

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const init = async () => {
  try {
    app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("[INFO] : Successfully connected to db");
  } catch (error) {
    console.log(`[ERROR] : Connection to db has failed\ ${error.message}`);
  }
};

init();
