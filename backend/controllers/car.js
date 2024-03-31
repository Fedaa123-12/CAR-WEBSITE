//import functions from car model
import {
    getCars
  } from "../models/carModel.js";
  
  //get all cars
  export const showAllCars = (req, res) => {
    getCars((err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };