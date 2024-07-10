const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const dotenv = require("dotenv").config();

const connectDb = asyncHandler(async () => {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(connect.connection.host);
});

module.exports = connectDb;