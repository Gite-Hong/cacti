
require("dotenv").config();
const mysql = require("mysql2");
// 환경변수에서 DB 연결 정보 불러오기

const db = mysql.createConnection({
  host: process.env.DB_HOST,     // trolley.proxy.rlwy.net
  user: process.env.DB_USER,     // root
  password: process.env.DB_PASS, // aGrgxhhVfDAtSEuYwmTAaxpmuShztPOd
  database: process.env.DB_NAME, // railway
  port: process.env.DB_PORT,     // 28948
});

// DB 연결
db.connect((err) => {
  if (err) {
    console.error("MySQL 연결 실패:", err);
  } else {
    console.log("MySQL 연결 성공!");
  }
});

module.exports = db;
