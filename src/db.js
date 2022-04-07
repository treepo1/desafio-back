const mysql = require('mysql');
const MY_HOST = process.env.DB_HOST;
const MY_USER = process.env.DB_USER;
const MY_PASS =  process.env.DB_PASS;
const MY_DB = process.env.DB_NAME;
const MY_PORT = process.env.DB_PORT;

const connection = mysql.createPool(process.env.CLEAR_DATABASE_URL);

connection.query('select 1 + 1', (err, rows) => { 
if(err) throw err;
console.log(`Conected to database: ${process.env.DB_NAME}`)
});


module.exports = connection;
