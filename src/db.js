const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    insecureAuth: true,
    port: process.env.DB_PORT

});

connection.connect((err) => {
    if (err) throw err;
    console.log(`Conected to database: ${process.env.DB_NAME}`)
})

module.exports = connection;
