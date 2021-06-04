const Router = require('koa-router');

const api = new Router();

api.get('/', (ctx) => ctx.body = 'API ');
api.get('/book', (ctx) => ctx.body = '북');

module.exports = api;