const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: [true, "Please provide username"]
    },
    email:{
        type: String,
        required: [true, "Please provide an email address"],
        unique: [true, "email already taken"]
    },
    password:{
        type: String,
        required: [true, "Please enter password"]
    },
},{
    timestamps: true
});

module.exports = mongoose.model("User", userSchema); 