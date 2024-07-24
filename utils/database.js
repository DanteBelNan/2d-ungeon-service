const mysql = require('mysql2');
require('dotenv').config()

const pool = mysql.createPool({
    host: 'mysql',
    user: 'root',
    port: 3306,
    password: process.env.DB_PASSWORD,
    database: 'main'
}).promise()


async function executeQuery(query, params = []){
    try {
        const [result] = await pool.query(query, params);
        return result;
    } catch (err) {
        throw err
    }
}

module.exports = { executeQuery };