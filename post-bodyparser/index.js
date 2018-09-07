const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()


app.use(bodyParser())
app.use(async(ctx) => {
    if (ctx.url === '/' && ctx.method === 'GET') {
        let html = `
            <form action="/" method="POST">
                姓名:<input type="text" name="name">
                年龄:<input type="text" name="age">
                邮箱:<input type="text" name="email">
                地址:<input type="text" name="id">
                <input type="submit" value="提交">
            
            </form>`
        ctx.body = html

    } else if (ctx.url === '/' && ctx.method === 'POST') {
        let postData = ctx.request.body
        ctx.body = postData

    } else {
        ctx.body = `
    <h2>404</h2>
`
    }


})

app.listen(3000, () => {
    console.log('server 启动成功')
})