import mysql from "mysql2";


// Create a connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: "sql8.freesqldatabase.com",
    user: "sql8695053",
    password: "CiE24Lf8kJ",
    database: "sql8695053"
});

// Export the connection pool
export default pool;