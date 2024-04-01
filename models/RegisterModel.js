const mongoose = require("mongoose");

const RegisterModel = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "please fill your username !"],
    },
    email: {
      type: String,
      required: [true, "please fill your email !"],
    },
    password: {
      type: String,
      required: [true, "please fill your password !"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Register", RegisterModel);
