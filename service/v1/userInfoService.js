const{ querySql } = require('../../uilts/Sql');

function insertUserInfo(nickName, gender, language, city, province, country, avatarUrl) {
  return querySql(
    `
    INSERT INTO wx_user (nickName, gender, language, city, province, country, avatarUrl)
    VALUES
    ('${nickName}', '${gender}', '${language}', '${city}', '${province}', '${country}', '${avatarUrl}')
      `)
}

module.exports = {
  insertUserInfo
};

