const mongoose = require("mongoose");

const { schema } = mongoose;

const commentSchema = new schema({
  user_id: {
    type: String,
    require: true,
  },
  comment: {
    type: String,
    require: true,
  },
}, {timestamps:true});

const Comment = mongoose.module("Comment", commentSchema);

module.exports = Comment;
