const mongoose = require("mongoose");

const connectDB = async () => {
    const mongoDB_URL = process.env.mongoDB_URL;
    const DB_Name = process.env.DB_Name;
try {
    const connnectionInstance = await mongoose.connect(`${mongoDB_URL}/${DB_Name}`);
    console.log(`MongoDB connecgtion ! DB Host : ${connnectionInstance.connection.host}`);
    
} catch (error) {
    colsole.error('mongoDB connection failed : ' , error);
    process.exit(1);
}
}

module.exports=(connectDB);