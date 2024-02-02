import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"rootPassword&",
  port: 3306,
  database:"mysqlBlogg",
})