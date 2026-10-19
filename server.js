const express = require("express");
const app = express();
require("dotenv").config();

app.listen(process.env.PORT, () => {
  console.log("serveur en cours sur", process.env.PORT);
});
