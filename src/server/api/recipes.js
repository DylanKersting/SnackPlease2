import { query } from "../query"

const cleanse = (text) => {
    return text.replace(/'/g, '')
}

export const get = async (ctx) => {
    ctx.body =  await query('select * from public.recipes')
    ctx.response.status = 200
}

export const getPage = async (ctx) => {
    ctx.body = await query(`select * from public.recipes order by created desc
                limit 8
                offset ${(ctx.params.page - 1) * 8}`)
    ctx.response.status = 200
}

export const getRecipe = async (ctx) => {
    ctx.body = (await query(`select * from public.recipes where id = '${cleanse(ctx.params.id)}'`))[0]
    ctx.response.status = 200
}

export const create = async (ctx) => {
    const isAdmin = await query(`select * from public.users where id = '${ctx.request.body.userid.replace(/'/g, '')}'`)
    if (isAdmin.length > 0) {
        await query(`insert into public.recipes(id, author, title, markdown)
                     values ('${cleanse(ctx.request.body.id)}','${isAdmin[0].username}', '${cleanse(ctx.request.body.title)}', '${cleanse(ctx.request.body.markdown)}')`)
        ctx.response.status = 200
    } else {
        ctx.response.status = 401
    }
}