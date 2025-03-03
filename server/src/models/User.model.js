const mongoose = require(mongoose);

const { schema } = mongoose;

const userSchema = new schema(
  {
    avatar: {
        type:Buffer
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
    type: {
      enum: [],
    },
    comment: {

    },
  },
  { timestamps: true }
);

const User = mongoose.module("User", userSchema);
module.exports(User);
