const Koa = require('koa') // koa v2
const convert = require('koa-convert')//当generator中间件在koa2中使用时需要'koa-convert'转换下

const loggerGenerator  = require('./logger-generator')
const app = new Koa()

app.use(convert(loggerGenerator()))

app.use(( ctx ) => {
    ctx.body = 'hello world!'
})

app.listen(3000,()=>[
    console.log('监听3000 端口')
])
