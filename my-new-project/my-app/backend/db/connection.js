const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "harry2217*",
  database: "myapp",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL 연결 실패:", err);
  } else {
    console.log("MySQL 연결 성공!");
  }
});

module.exports = db;
