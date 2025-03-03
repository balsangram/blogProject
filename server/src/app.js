const express = require("express");

const mainRouter = require("./routes/mainRouter")

const app = express();
app.use('/myblog',mainRouter);

module.exports = app;