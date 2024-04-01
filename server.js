const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { DatabaseConnection } = require("./utils/db");
const { route }  = require("./routes/UserRoute");

// middlewares for the app
const app = express();
app.use(cors());
app.use(express.json());

// default routes
// app.use( "/api/v1" , (req , res) => {
//     return res.status(200).send("hello there !");
// })

// main routes
app.use( "/api/v1", route );

// app connections
const port = process.env.PORT || 4000;
app.listen( port , () => {
  DatabaseConnection();
  console.log(`app listening on port ${port}.`);
});
