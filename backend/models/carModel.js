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



//get product by id
export const getCarById = (id, result) => {
  db.query("SELECT * from  `Avaialable cars` WHERE ID = ?",[id] ,
  (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};


//insert car
export const insertCar  = (data,result) => {
  db.query("INSERT INTO `Avaialable cars` SET?",[data],
  (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
}


//"INSERT INTO `Avaialable cars` (Name, Model, Mileage, MotExp, Reg,KeyNo,CatStat,Colour,Value,FuelType,ExtraFeatures )"
//+"VALUES("+data[0] "'Name', 'Model', 65.4, 'MotExp', 'Reg','KeyNo','CatStat','Colour',96.4,'FuelType','ExtraFeatures')",