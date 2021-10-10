import { query } from "./query"

export const cleanse = (text) => text.replace(/'/g, '')

export const isAdmin = async(token) => {
  return (await query(`select * from public.users where id = '${cleanse(token)}'`)).length > 0
}
