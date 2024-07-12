const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please add name"]
    },
    email:{
        type: String,
        required: [true, "Please add email"]
    },
    phone:{
        type: String,
        required: [true, "Please add phone"]
    },
},{
    timestamps: true
});

module.exports = mongoose.model("contact", contactSchema); 