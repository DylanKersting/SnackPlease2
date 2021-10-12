import { query } from "../query"
import fs from 'fs'
import path from 'path'
import v4 from "uuid-browser/v4"
import { cleanse } from '../helpers'


export const get = async (ctx) => {
    ctx.body =  await query('select * from public.recipes')
    ctx.response.status = 200
}

export const getPage = async (ctx) => {
  const words = ctx.request.query.searchQuery ? ctx.request.query.searchQuery.split(' ').map(word => cleanse(word)) : null
  if (!words) {
    ctx.body = await query(`select * from public.recipes
            order by created desc
            limit 8
            offset ${(ctx.params.page - 1) * 8}`)
  } else {
    const sql =  `select * from public.recipes
                WHERE 
                ${words.map((word, index) => {
                  return ( index === 0 ? '' : 'OR' ) + ` LOWER(markdown) LIKE LOWER('%${word}%') OR LOWER(title) LIKE LOWER('%${word}%')`
                }).join('\n')}
                order by created desc
                limit 8
                offset ${(ctx.params.page - 1) * 8}`
    console.log(sql, words)
    ctx.body = await query(sql)
  }
  ctx.response.status = 200
}

export const getRecipe = async (ctx) => {
    ctx.body = (await query(`select * from public.recipes where id = '${cleanse(ctx.params.id)}'`))[0]
    ctx.response.status = 200
}

export const create = async (ctx) => {
    const exists = (await query(`select * from public.recipes where id = '${cleanse(ctx.request.body.id)}'`))
    if (exists.length > 0) {
      await query(`update public.recipes
                    set title = '${cleanse(ctx.request.body.title)}',
                    markdown = '${cleanse(ctx.request.body.markdown)}'`)
    } else {
      await query(`insert into public.recipes(id, author, title, markdown)
      values ('${cleanse(ctx.request.body.id)}','Lauren Rydh', '${cleanse(ctx.request.body.title)}', '${cleanse(ctx.request.body.markdown)}')`)
    }
    ctx.response.status = 200
}

export const image = async (ctx) => {
  if (!fs.existsSync('./dist/images/recipes/' + ctx.request.body.id)) {
    fs.mkdirSync('./dist/images/recipes/' + ctx.request.body.id)
  }
  const fPath = './dist/images/recipes/' + ctx.request.body.id + '/' + (ctx.request.body.imageName || v4()) + '.png'
  require("fs").writeFileSync(fPath, fs.readFileSync(ctx.request.files.file.path))
  ctx.body = fPath.replace('./dist', '')
  ctx.response.status = 200
}