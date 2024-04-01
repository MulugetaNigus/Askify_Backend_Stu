// import our model to work with
const SendMessageModel = require("../models/SendMssgModel");
const RegisterModel = require("../models/RegisterModel");
const FetchLectures = require("../models/FetchLecInfo");
const getResponse = require("../models/ReadResponses");
const bcrypt = require("bcrypt");

// create the message to the another user
const SendMessg = async (req, res) => {
  try {
    const { lecture, message, user } = req.body;

    if (!lecture || !message || !user) {
      return res.status(400).send({ message: "please fill out the form !" });
    }

    const AddMessage = await SendMessageModel.create(req.body);
    // check weather the data sublitted or not
    if (!AddMessage) {
      return res.status(400).send({ message: "can not send the message !" });
    }
    return res.status(200).json(AddMessage);
  } catch (error) {
    console.log(error.message);
  }
};

// get a message to associated with  the user username
const getAnswers = async (req, res) => {
  try {
    const getDetail = await getResponse.find({});
    return res.status(200).json(getDetail);
  } catch (error) {
    return res.status(400).send({ message: "something went wrong !" });
  }
};


// get single by iys id
const getSingleMessg = async (req, res) => {
  try {
    const { id } = req.params;
    const getDetail = await SendMessageModel.find({});
    return res.status(200).json(getDetail);
  } catch (error) {
    return res.status(400).send({ message: "something went wrong !" });
  }
};

// register and login
const Register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).send({ message: "please fill out the form !" });
    }

    // check the user exist aleady or not
    const IsExist = await RegisterModel.findOne({ username });
    if (IsExist) {
      return res.status(400).send({ message: "user already exist !" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = {
      username: username,
      email: email,
      password: hashedPassword,
    };

    const reg = await RegisterModel.create(userData);
    if (!req) {
      return res.status(400).send({ message: "can not create the user !" });
    }
    return res.status(200).json(reg);
  } catch (error) {
    return res.status(400).send({ message: "something went wrong !" });
  }
};

// login api
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).send({ message: "please fill out the form !" });
    }

    // get the user by its email
    const IsValiedUser = await RegisterModel.findOne({ username });

    // check the user existances
    if (!IsValiedUser) {
      return res.status(400).send({ message: "user not found !" });
    }

    // compare the hashed password
    const DecodePassword = await bcrypt.compare(
      password,
      IsValiedUser.password
    );

    // if the user exist check the password
    if (!DecodePassword) {
      return res
        .status(400)
        .send({ message: "invalied crediencial detected !" });
    }
    return res.status(200).send({ message: "user login successfully !" });
  } catch (error) {
    return res.status(400).send({ message: "something went wrong !" });
  }
};

// get the lectures info
const getLectures = async (req, res) => {
  // const { name, availableTime, Skill } = req.body;
  try {
    const getLec = await FetchLectures.find({});
    if (!getLec) {
      return res.status(400).send({ message: "lecture not found !" });
    }
    return res.status(200).send(getLec);
  } catch (error) {
    return res.status(400).send({ message: "lectures not found" });
  }
};

// add the lectures info
const addLectures = async (req, res) => {
  const { name, availableTime, Skill } = req.body;
  if(!name || !availableTime || !Skill){
    return res.status(400).send({ message : "can not create the lectures"})
  }
  try {
    const getLec = await FetchLectures.create(req.body);
    if (!getLec) {
      return res.status(400).send({ message: "lectures added !" });
    }
    return res.status(200).send(getLec);
  } catch (error) {
    return res.status(400).send({ message: "can not add lectures" });
  }
};

// get lectures info individually
const getSingleLecture = async (req , res) => {
  try {
    const { id } = req.params;
    const getById = await FetchLectures.findById(id);
    if(!getById){
      return res.status().send({ message: `can not get the lecture with ID ${id}`})
    }
    return res.status(200).json(getById);
  } catch (error) {
    return res.status(400).send({ message: `can not get the lecture with ID ${id}`})
  }
}

// get the single answers from the lectures
const getSingleAnswers = async (req , res) => {
try {
  const { id } = req.params;
  const getOne = await getResponse.findById(id);
  if(!getOne){
    return res.status(400).send({ message : "can not get the message !"})
  }
  return res.status(200).send(getOne);
} catch (error) {
  return res.status(400).send({ message: "can not get the answers !"})
}
}

// export the all function
module.exports = {
  SendMessg,
  getSingleMessg,
  Register,
  login,
  getLectures,
  addLectures,
  getSingleLecture,
  getAnswers,
  getSingleAnswers
};
