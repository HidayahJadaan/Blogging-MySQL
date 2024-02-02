import mysql from 'mysql';


export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    port: 3306,
    database:"mysqlBlogg",
})

// db.connect(err => {
//     if (!err) {
//       console.log("DB Connection Succeeded");
//     } else {
//       console.log("DB Connection Failed", err);
//     }
// });
