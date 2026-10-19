const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  name: {
    require: true,
    type: tring,
  },
  email: {
    require: true,
    type: String,
  },
  password: {
    require: true,
    type: String,
  },
});
