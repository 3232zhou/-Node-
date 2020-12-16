class HttpException extends Error{
  constructor(message = '操作失败', code = 10) {
    super();
    this.code = code;
    this.message = message;
  }
}
// 参数异常类
class ParameterException extends HttpException{
  constructor(message, code) {
    super();
    this.code = 2;
    this.message = message || '参数错误';
  }
}
// 成功
class Success extends HttpException{
  constructor(message, code, data) {
    super();
    this.code = 1;
    this.message = message || '成功';
    this.data = data;
  }
}

module.exports = {
  HttpException,
  ParameterException,
  Success,
};
