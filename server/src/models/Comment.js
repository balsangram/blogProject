const mongoose = require("mongoose");

const { Schema } = mongoose;

const commentSchema = new Schema({
  user_id: {
    type: String,
    require: true,
  },
  comment: {
    type: String,
    require: true,
  },
}, {timestamps:true});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
