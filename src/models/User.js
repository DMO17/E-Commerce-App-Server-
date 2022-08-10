const { model, Schema } = require("mongoose");

const schema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: { type: String, required: true, min: 6 },
    isAdmin: { type: Boolean, default: false },
    orderId: [
      {
        type: Schema.Types.ObjectId,
        ref: "order",
      },
    ],
  },
  { timestamps: true }
);

const Account = model("accounts", schema);

module.exports = Account;
