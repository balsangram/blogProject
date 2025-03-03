const connectDB = require("./src/config/db");
const app = require("./src/app")
const port = process.env.PORT ;
connectDB()
  .then(() => {
    app.listen(port || 5000,() => {
      console.log(`server is running at port : ${port ?? 5000}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });
