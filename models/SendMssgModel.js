const mongoose = require("mongoose");

// create our model
const SendMessageModel = mongoose.Schema(
  {
    lecture: {
      type: String,
      required: true,
      unique: false, 
    },
    message: {
      type: String,
      required: true,
      unique: false,
    },
    user: {
      type: String,
      required: true,
      unique: false,
    },
  },
  {
    timestamps: true,
  }
);

// create and export the model
module.exports = mongoose.model("Messg4Lectures", SendMessageModel);
