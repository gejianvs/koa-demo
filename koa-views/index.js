const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const app = new Koa()

// 加载模板引擎
app.use(views(path.join(__dirname, './view'), {
    extension: 'ejs'
}))

app.use(async(ctx) => {
    let title = 'hello koa2'
    let demo = 'hello ejs'
    if (ctx.url == '/index') {
        await ctx.render('index', {
            title,
        })
    } else if (ctx.url == '/demo') {
        await ctx.render('demo', {
            demo,
        })
    } else {
        ctx.body = 'nothing'
    }

})

app.listen(3001,()=>{
    console.log('server is runing')
})