//import express
import express from "express";

//import functions from controller
import {
  showAllCars,
  showCarByID,
  createCar
} from "../controllers/car.js";
import { getCarById } from "../models/carModel.js";

//init express router
const router = express.Router();

//get all product
router.get("/getAllCars", showAllCars);

//get car by ID
router.get("/getCarByID",  showCarByID);


//add new car
router.post("/newCar" , createCar);
//export default router
export default router;