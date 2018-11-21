require("dotenv").config();

let mysql = require("mysql");

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 8080,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;