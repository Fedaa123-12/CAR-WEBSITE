//import connection
import db from "../config/database.js";



//get all products
export const selectAll = (result)=> {
    db.query("SELECT * FROM 'Available cars'",(err,results)=>{
            if(err){
                console.log(err);
                result(err,null);
            }
            else{
                result(null,results);
            }



    });
}