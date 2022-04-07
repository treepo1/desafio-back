const mysql = require('mysql');
const MY_HOST = process.env.DB_HOST;
const MY_USER = process.env.DB_USER;
const MY_PASS =  process.env.DB_PASS;
const MY_DB = process.env.DB_NAME;
const MY_PORT = process.env.DB_PORT;

const connection = mysql.createConnection({
    host: MY_HOST,
    user: MY_USER,
    password: MY_PASS,
    database: MY_DB,
    port: MY_PORT,
    multipleStatements: true

});

connection.connect((err) => {
    if (err) throw err;
    console.log(`Conected to database: ${process.env.DB_NAME}`)
})

module.exports = connection;
