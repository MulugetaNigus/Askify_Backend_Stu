const mongoose = require("mongoose");

const FetchLectures = mongoose.Schema (
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    availableTimeFrom: {
      type: String,
      required: true,
    },
    availableTimeTo: {
      type: String,
      required: true,
    },
    Skill: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model( "lectureregistrations", FetchLectures );