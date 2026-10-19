const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    mongoose
      .connect(process.env.MONGODB_URI)
      .then(console.log("connecter à la base de données"));
  } catch (error) {
    console.log("Erreur lors de connection à la base de donnée", error);
  }
};

module.exports = connectDb;
