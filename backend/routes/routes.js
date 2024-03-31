//import express
import express from "express";

//import functions from controller
import {
  showAllCars
} from "../controllers/car.js";

//init express router
const router = express.Router();

//get all product
router.get("/getAllCars", showAllCars);


//export default router
export default router;