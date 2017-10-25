var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model(
  "User",
  new Schema({
    username: String,
    phonenumber: String,
    password: String,
    email: String,
    admin: Boolean
  })
);
