const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const catchError = require('./core/catchError');
const cors = require('koa2-cors');
const app = new koa();

app.use(cors());
app.use(catchError);
app.use(bodyParser());
const InitMangerl = require('./core/index');
InitMangerl.initCore(app);
app.listen(4000, function () {
  console.log('端口跑在： 127.0.0.1:4000')
});
