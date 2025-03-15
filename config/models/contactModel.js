const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "Please add the contact name"] },
    email: {
      type: String,
      reuired: [true, "Please add the email address"],
    },
    phone: {
      type: String,
      requried: [true, "Please enter your phone number"],
    },
  },
  {
    timestamp: true,
  }
);
module.exports = mongoose.model("Contact", contactSchema);
