// import mongoose from 'mongoose';
// const mongoose = require("mongoose");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    name : String,
    email : String,
    phone : Number,
    password : String
})

const User = mongoose.model("User" , userSchema);

module.exports = User; 