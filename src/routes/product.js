import { Router } from "express";

const productInfo = Router();

productInfo.get("/all-product",(req,res)=>{
    res.send({
        msg:"product route done"
    })
})

export default productInfo;