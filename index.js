const koa = require("koa");
const Router = require('koa-router');

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log('✅ Connected to DB');
const handleError = error => console.log(`❌ Error on DB Connection:${error}`);

db.once('open', handleOpen);
db.on('error', handleError);

const app = new koa();
const router = new Router();
const api = require('./api');

router.get('/', (ctx) => ctx.body = '홈');
router.use('/api', api.routes());

app.use(router.routes()).use(router.allowedMethods());

// // logger
// app.use(async (ctx, next) => {
//     await next();
//     const rt = ctx.response.get('X-Response-Time');
//     console.log(`${ctx.method} ${ctx.url} - ${rt}`);
// });

// // x-response-time
// app.use(async (ctx, next) => {
//     const start = Date.now();
//     await next();
//     const ms = Date.now() - start;
//     ctx.set('X-Response-Time', `${ms}ms`);
// });
  
//  // response
// app.use(ctx => {
//     ctx.body = 'Hello Koa';
// });
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Koa server is listening to port ${port}`);
});