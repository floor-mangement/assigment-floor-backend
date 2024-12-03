import { Router } from "express";

const userInfor = Router();



userInfor.get("/all-user" , (req,res)=>{
    res.status(200).json({
        msg:"Route Done"
    })
})







export default userInfor;