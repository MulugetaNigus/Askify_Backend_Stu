const express = require("express");
const {
  SendMessg,
  getSingleMessg,
  Register,
  login,
  getLectures,
  addLectures,
  getSingleLecture,
  getAnswers,
  getSingleAnswers
} = require("../controller/UserController");

const route = express.Router();

// POST ROUTE
route.get("/", getSingleMessg);
route.post("/", SendMessg);
route.post("/register", Register);
route.post("/login", login);
route.get("/Alllectureinfo", getLectures);
route.get("/addLectures", addLectures);
route.get("/getLecture/:id" , getSingleLecture);
route.get("/responses" , getAnswers);
route.get("/getAnswer/:id" , getSingleAnswers);

module.exports = { route };
