//import express
import express from "express";

//import functions from controller
import {
  showProducts
} from "../controllers/product.js";

//init express router
const router = express.Router();

//get all product
router.get("/products", showProducts);


//export default router
export default router;