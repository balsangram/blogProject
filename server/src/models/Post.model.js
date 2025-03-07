const mongoose = require("mongoose");

const {Schema} = mongoose;

const postSchema = new Schema({
userId:{
    type:String,
    require:true
},
banner : {
},
content : {
    type:String,
    require:true
}
},{timestamps:true})

const Post = mongoose.model("Post",postSchema);
module.exports=(Post);