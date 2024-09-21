import mysql from "mysql2/promise";
import dotenv from "dotenv"
dotenv.config();

// Create the connection pool
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

// Function to get all rows from the restauranttable
async function getAllTables() {
    const [rows] = await pool.query("SELECT * FROM restauranttable");
    return rows;
}

async function getbyuserid(id)
{
    const [rows]=await pool.query(`select * from restauranttable where t_num=?`,[id])
    return rows[0]
}
const getbyuser=await getbyuserid(1);
console.log(getbyuser);

const getalldata=await getAllTables();
console.log(getalldata);
