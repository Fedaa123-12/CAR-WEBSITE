//import functions from car model
import {
    getCars,
    getCarById,
    insertCar
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

//get car by ID

export const showCarByID = (req, res) => {
  const data = req.query.id;
  getCarById(data,(err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

  //insert new car
  export const createCar = (req, res) => {
    const data = req.body;
    insertCar(data,(err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };