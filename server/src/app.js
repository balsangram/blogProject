const express = require("express");
const bodyParser = require("body-parser")

const mainRouter = require("./routes/mainRouter");

const app = express();
app.use(bodyParser.json())

// healthy server
app.get('/',(req,res)=>{
    res.json({status:200, message:"surver running..."})
})

app.use('/myblog',mainRouter);

module.exports = app;