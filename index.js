const koa = require("koa");
const Router = require('koa-router');

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

app.listen(4000, () => {
    console.log('heurm server is listening to port 4000');
});