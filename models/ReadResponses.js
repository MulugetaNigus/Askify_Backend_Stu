const mongoose = require("mongoose");

const RegisterModel = mongoose.Schema({
  lecture: {
    type: String,
  },
  message: {
    type: String,
  },
  user: {
    type: String,
  },
});

const getResponse = mongoose.model("messg4students", RegisterModel);
module.exports = getResponse;
