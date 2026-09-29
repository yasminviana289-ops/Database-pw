import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: Number(process.env.DB_PORT || 3306),
  waitForConnections: true,
  connectionLimit: 10
});

pool.getConnection()
  .then(connection => {
    console.log("MySQL conectado!");
    connection.release();
  })
  .catch(error => {
    console.error("Erro ao conectar no MySQL:", error);
  });
