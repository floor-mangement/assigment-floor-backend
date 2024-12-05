// import {getAllUser , getfindOneUser} from "../services/userServices.js";

const { getAllUser ,getfindOneUser } = require("../services/userServices.js");

// const { getAllUser, getfindOneUser } = require("../services/userServices.js");


const LogingUser = async (req, res) =>{

    console.log("In Loging User");
    console.log(req.body);

    try {
        const databaseUser = await getAllUser();
        console.log(databaseUser);
        if(databaseUser){
            res.status(200).json(databaseUser);
        }else{
            res.status(400).json({message:"Not Users"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
        
    }
//     const dataBaseUser = getAllUser();

//     console.log(dataBaseUser);

//     if(dataBaseUser){
//         res.status(200).json(dataBaseUser);
//     }else{
//         res.status(400).json("Error");
//     }
}

const FindUser = async (req, res) =>{
    console.log("in FindUser");
    console.log(req.body);
    const useId = req.body;

    try {
        const databaseUser = await getfindOneUser(useId);
        console.log(databaseUser);
        if(databaseUser){
            res.status(200).json(databaseUser);
        }else{
            res.status(400).json({msg:"User Not Found"});
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Internal Server Error"});
        
    }
    // const dataBaseUser = getfindOneUser(useId);

    // console.log(dataBaseUser);

    // if(dataBaseUser){
    //     res.status(200).json(dataBaseUser);
    // }else{
    //     res.status(400).json("Error");
    // }
}

//this is nodejs export funtion

module.exports ={
    LogingUser,
    FindUser,
};