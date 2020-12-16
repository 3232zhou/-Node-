const requireDirectory = require('require-directory');
const Router = require('koa-router');

class InitManger {
  static initCore(app) {
    InitManger.app = app;
    InitManger.initLoadRouter();
    // InitManger.LoadConfig();
  }
  // 路由自动注册
  static initLoadRouter() {
    const path = `${process.cwd()}/api`;
    requireDirectory(module, path, {
      visit: whenLoadModeles
    });
    function whenLoadModeles(obj) {
      if (obj instanceof Router) {
        InitManger.app.use(obj.routes())
      }
    }
  }
  static LoadConfig(path = '') {
    const configPath = path || process.cwd() + '/config/index.js';
    const config = require(configPath);
    global.config = config;
  }
}

module.exports = InitManger;
