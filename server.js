const express = require("express");
const connectDb = require("./config/db");
const app = express();
require("dotenv").config();

//connect to data base
connectDb();

app.listen(process.env.PORT, () => {
  console.log("serveur en cours sur", process.env.PORT);
});
