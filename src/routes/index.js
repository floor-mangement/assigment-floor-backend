// import userInfor from "./userInfo";
import { Router } from "express";
import userInfor from "./userInfo.js";
import productInfo from "./product.js";


const routes = Router();



routes.use("/user" , userInfor);
routes.use("/product", productInfo);



export default routes;






