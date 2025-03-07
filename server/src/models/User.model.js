const mongoose = require("mongoose");
const Comment = require("../models/Comment")
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    avatar: {
      type: Buffer,
    },
    name: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password:{
      type:String,
      require: true
    },
    type: {
      type:String,
      enum: ['admin','user'],
      default:"user"
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
