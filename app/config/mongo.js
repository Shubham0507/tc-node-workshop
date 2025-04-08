const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://Shubham-Singh:wUJp1A4h8MdmDzEr@tc-cluster.kj4rove.mongodb.net/?retryWrites=true&w=majority&appName=tc-cluster/task-management-system", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
};

module.exports = connectDB;