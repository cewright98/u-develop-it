const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        socketPath: '/tmp/mysql.sock',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'ClairesCrik1*',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;