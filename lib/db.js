import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // CHANGE THIS if you have mysql password
  database: 'vtpass_db', // CHANGE THIS to your DB name
});

export default db;
