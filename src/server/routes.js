import Router from 'koa-router'
import body from 'koa-body'
import path from 'path'
import * as api from './api'
import serve from 'koa-static'
import { isAdmin } from './helpers'
const router = new Router()


router.get('/api/recipes', api.recipes.get)
router.get('/api/recipes/:page', api.recipes.getPage)
router.get('/api/recipe/:id', api.recipes.getRecipe)

router.put('(.*)', isAdmin)
router.post('(.*)', isAdmin)

router.put('/api/recipes/image', api.recipes.image)
router.post('/api/recipes', api.recipes.create)
router.get('/api/admin/requests', api.admin.requests)


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