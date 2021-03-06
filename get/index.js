// GET请求数据有两个途径。
//
// 1.是从上下文中直接获取
// 请求对象ctx.query，返回如 { a:1, b:2 }
// 请求字符串 ctx.querystring，返回如 a=1&b=2
// 2.是从上下文的request对象中获取
// 请求对象ctx.request.query，返回如 { a:1, b:2 }
// 请求字符串 ctx.request.querystring，返回如 a=1&b=2




const Koa=require('koa')
const app=new Koa()


app.use(async (ctx)=>{
    let url=ctx.url
    const req_query=ctx.req.query
    const req_querystring=ctx.req.querystring


    const ctx_query=ctx.query
    const ctx_querystring=ctx.querystring


    ctx.body = {
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
    }
})

app.listen(3000,()=>{
    console.log('server 启动成功')
})
