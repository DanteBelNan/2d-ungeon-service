const mysql = require('mysql2');
require('dotenv').config()

const pool = mysql.createPool({
    host: 'mysql',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'main'
}).promise()

async function run() {
    try {
        const [result] = await pool.query("SHOW TABLES;");
        console.log(result);
    } catch (error) {
        console.error('Error executing query:', error);
    }
}

run();