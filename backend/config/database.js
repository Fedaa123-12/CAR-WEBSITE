import mysql from "mysql2";


//connect
const db = mysql.createConnection({
    host: "sql8.freesqldatabase.com",
    user: "sql8695053",
    password: "",
    database: "sql8695053",
    //default port 3306
});


export default db;


