const mysql = require('mysql2/promise');
const dbConfig = require('../dbConfig');

async function insertNamesTodb(input) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const sql = `INSERT INTO names (name) VALUES (?)`;
    const [result] = await connection.execute(sql, input);
    await connection.close();
    return result;
  } catch (error) {
    console.log('insertNamesTodb ===', error);
  }
}

async function getNamesFromDb() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const sql = `SELECT * FROM names`;
    const [result] = await connection.query(sql);
    await connection.close();
    return result;
  } catch (error) {
    console.log('getNamesFromDb ===', error);
  }
}

module.exports = {
  insertNamesTodb,
  getNamesFromDb,
};
