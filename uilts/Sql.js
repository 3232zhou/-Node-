const { connect } = require('../uilts/db');
async function querySql(sql, data) {
  let conn = await connect();
  try {
    let [rows, fields] = await conn.execute(sql);
    return rows;
  } catch (e) {
    return '添加失败';
  } finally {
    conn.end();
  }
}
module.exports = {
  querySql
};
