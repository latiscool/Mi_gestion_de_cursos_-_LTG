const { Pool } = require('pg')
require('dotenv').config();
const config = {
  user: process.env.BD_USER,
  host: process.env.BD_HOST,
  database: process.env.BD_NAME ,
  password: process.env.BD_PWD,
  port: process.env.BD_PORT,
  max: 20,
  min: 5,
  iddleTimeoutMillis: 20000,
  connectionTimeoutMillis:  30000
};
const pool = new Pool(config);

module.exports={pool};