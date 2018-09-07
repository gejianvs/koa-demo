/**
 * 管理员用户子路由
 */

const Router = require('koa-router')
const layout = require('../controllers/layout')

const  router=new Router()

module.exports = router.get( '/', layout.layoutPage )