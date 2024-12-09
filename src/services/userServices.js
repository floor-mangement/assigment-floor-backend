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
        console.log(useId);
        const user = await User.findById(useId);
        console.log(user);
        return user;
    }

    const createNewUser = async (user) =>{
        console.log(user);
        try {
            return await User.create(user);
        } catch (error) {
            console.log(error);
            return "DataBase Syntax Error";
        }
        
    }
    

module.exports ={
    getAllUser,
    getfindOneUser,
    createNewUser
}


