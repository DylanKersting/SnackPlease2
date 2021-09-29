import Router from 'koa-router'
import body from 'koa-body'
import path from 'path'
import * as api from './api'
import serve from 'koa-static'
const router = new Router()

router.get('/recipes', api.recipes.get)
router.get('/recipes/:page', api.recipes.getPage)
router.post('/recipes', api.recipes.create)


router.get('(.*)', api.users.logRequest)

router.get('(.*)', async (ctx, next) => {
  if (ctx.request.url.includes('/index.js')) {
    ctx.request.url = '/index.js'
  } else if (ctx.request.url.includes('/index.map.js')) {
    ctx.request.url = '/index.map.js'
  } else if (ctx.request.url.includes('lib') || ctx.request.url.includes('images')) {
  } else if(ctx.request.url !== '/index.js' && ctx.request.url !== '/index.js.map') {
    ctx.request.url = '/'
  } 
  await serve(path.join(global.appRoot, './dist'))(ctx, next)
})

export default router.routes()