const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: [true, "Please insert the username"],
    },
    email: {
      type: String,
      required: [true, "Please add the user email Address"],
      unique: [true, "Email address already Taken"],
    },
    password: {
      type: String,
      required: [true, "Please insert the password"],
    },
  },
  {
    Timestamp: true,
  }
);
module.exports = mongoose.model("User", userSchema);
