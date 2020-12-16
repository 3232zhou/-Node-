const mysql = require('mysql2/promise');
const { dbName, host, port, user, password } = require('../config/index').database;

async function connect() {
  const connection = await mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: dbName,
  });
  return connection;
}

module.exports = {
  connect
};
