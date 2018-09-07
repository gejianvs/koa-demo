const Router = require('koa-router')

const layout = require('./layout')
const admin = require('./admin')
const  router=new Router()


router.use('/', layout.routes(), layout.allowedMethods())
router.use('/admin', admin.routes(), admin.allowedMethods())


module.exports = router