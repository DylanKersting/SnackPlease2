import { query } from '../query';
import { isAdmin } from '../helpers'

export const requests = async (ctx) => {
  ctx.body = await query(`SELECT count(*) as cnt, time::DATE::text as day 
  FROM public.requests GROUP BY Day ORDER BY Day Desc`)
  ctx.response.status = 200
}