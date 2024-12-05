// import { Router } from "express";

const { Router } = require("express");
const productInfo = Router();

// const productInfo = Router();

productInfo.get("/all-product",(req,res)=>{
    res.send({
        msg:"product route done"
    })
})

module.exports = productInfo;