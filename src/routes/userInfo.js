// import { Router } from "express";
// import { LogingUser , FindUser} from "../controllers/userController.js"
const  { LogingUser , FindUser,RegisterUser} = require("../controllers/userController.js");

// const userInfor = Router();

const express = require("express");
const userInfor = express.Router();

userInfor.get("/all-user" , (req,res)=>{
    res.status(200).json({
        msg:"Route Done"
    })
})

userInfor.get("/login" , LogingUser);
userInfor.post("/register" , RegisterUser);
userInfor.post("/find-user" , FindUser);







module.exports = userInfor;