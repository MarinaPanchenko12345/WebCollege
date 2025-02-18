// db/db.mjs
import mysql from "mysql2";

export const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "web_college",
});

con.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to MySQL");
});
