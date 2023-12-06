const mysql = require('mysql2/promise');

async function connectDB(){

    // DB on WAMP Server for sample
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'express_test_db',
        ssl: {
            rejectUnauthorized: false
        }
    })
    
    const result = await connection.query('SELECT * FROM users;');
    console.log(result);
}

module.exports = connectDB;