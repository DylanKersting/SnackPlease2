import { query } from "./query"

export const cleanse = (text) => text.replace(/'/g, '')

export const isAdmin = async (ctx, next) => {
  try {
    if ((await query(`select * from public.users where id = '${cleanse(ctx.cookies.get('user'))}'`)).length > 0) {
      return next()
    }
  } catch (e) {
    console.log(e)
  }
  ctx.response.status = 401
}
