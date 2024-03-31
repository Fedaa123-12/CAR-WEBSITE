//import connection
import db from "../config/database.js";

//get all products
export const getCars = (result) => {
  db.query("SELECT * from  `Avaialable cars`", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};