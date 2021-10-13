import { query } from '../query';
import { isAdmin } from '../helpers'

export const requests = async (ctx) => {
  ctx.body = await query(`SELECT count(*) as cnt, time::DATE::text as day 
  FROM public.requests GROUP BY Day ORDER BY Day Desc
  limit 7`)
  ctx.response.status = 200
}

export const uniqueIps = async (ctx) => {
  ctx.body = await query(`SELECT count(*) as cnt, s.day from (SELECT ip, time::date::text as day  from public.requests
    group by ip, day order by day desc) s group by s.day order by s.day desc limit 7`)
  ctx.response.status = 200
}

export const topRecipes = async (ctx) => {
  const top = await query(`SELECT count(*) as cnt, path from public.requests
  where path like '%/recipe/%-%-%-%' and time >= CURRENT_DATE - 7
  group by path order by cnt desc
  limit 7`)
  for(const recipe of top) {
    const id = recipe.path.replace('/recipe/', '')
    recipe.name = (await query(`select title from recipes where id = '${id}'`))[0].title
  }
  ctx.body = top
  ctx.response.status = 200
}