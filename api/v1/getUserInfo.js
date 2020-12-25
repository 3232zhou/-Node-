const Router = require('koa-router');
const { objectValueIsEmpty } = require('../../uilts/uilts');
const { HttpException, Success } = require('../../core/HttpException');
const router = new Router({
  prefix: '/v1'
});
const { ParameterException } = require('../../core/HttpException');
const { insertUserInfo } = require('../../service/v1/userInfoService');
router.post('/API_getUserInfo', async (ctx, next) => {
  if (objectValueIsEmpty(ctx.request.body) !== undefined) {
    throw new ParameterException();
  }
  const { nickName, gender, language, city, province, country, avatarUrl } = ctx.request.body;
  const result = await insertUserInfo(nickName, gender, language, city, province, country, avatarUrl);
  if (result === '添加失败') {
    throw new HttpException();
  }
  throw new Success(null, null, {imageUrl: avatarUrl});
});
router.get('/test', async (cex, next) => {
  throw new Success();
});
module.exports = router;
