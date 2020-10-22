const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    fullname: String,
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    age: String,
    photo: String,
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model("contact", ContactSchema);

module.exports = Contact;
