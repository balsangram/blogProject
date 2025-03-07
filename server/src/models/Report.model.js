const mongoose = require("mongoose");

const {schema} = mongoose;

const reportSchema = new schema({
    userId:{
        type:String,
        require:true
    },
    reportId:{
        type:String,
        require:true
    },
    type:{
        enum : [a,s,d]
    }

},{timestamps:true})

const Report = mongoose.module("Report",reportSchema)
module.exports(Report)