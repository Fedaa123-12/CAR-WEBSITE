//import functions from Product model
import {
    getProducts
  } from "../models/productModel.js";
  
  //get all products
  export const showProducts = (req, res) => {
    getProducts((err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };