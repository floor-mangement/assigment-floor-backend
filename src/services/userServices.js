// import User from "../models/userModel.js";
const { default: mongoose } = require("mongoose");
const User = require("../models/userModel.js");


    const getAllUser =async () => {
        // const allUser = await User.findById("675035e097970cd7117958d1");
        console.log("in get all user");
        const allUser = await User.find({});
        console.log("User : ", allUser);
        return allUser;
    }

    const getfindOneUser =async (useId) => {
        const user = await User.findById(useId);
        return user;
    }
    

module.exports ={
    getAllUser,
    getfindOneUser
}


