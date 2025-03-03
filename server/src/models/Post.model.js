const mongoose = require("mongoose");

const {schema} = mongoose;

const postSchema = new schema({
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