const {HttpException} = require('../core/HttpException');
const catchError = async (ctx, next) => {
  try {
    await next();
  }catch (error) {
    if (error instanceof HttpException) {
      ctx.body = {
        message: error.message,
        code: error.code,
        data: error.data
      }
    } else {
      ctx.body = {
        message: '服务器错误',
        code: 500
      }
    }
  }
};

module.exports = catchError;
