const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',        // MySQL server host
  user: 'root',     // MySQL username
  password: '', // MySQL password
  database: 'newapp'  // Name of the database you want to connect to
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database.');
});

module.exports = connection;