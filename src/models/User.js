const { model, Schema } = require("mongoose");

const userSchema = {};

const schema = new Schema(userSchema, { timestamps: true });

const User = model("user", schema);

module.exports = User;
