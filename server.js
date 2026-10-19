const express = require("express");
const connectDb = require("./config/db");
const app = express();
require("dotenv").config();
app.use(express.json());
//connect to data base
connectDb();
//users routers
app.use("/users", require("./routes/user.routes"));
app.listen(process.env.PORT, () => {
  console.log("serveur en cours sur", process.env.PORT);
});
