import { query } from "../query"

export const get = async (ctx) => {
    ctx.body =  await query('select * from public.recipes')
    ctx.response.status = 200
}

export const getPage = async (ctx) => {
    ctx.body = await query(`select * from recipes order by created desc
                limit 8
                offset ${(ctx.params.page - 1) * 8}`)
    ctx.response.status = 200
}

export const create = async (ctx) => {
    const isAdmin = await query(`select * from public.users where id = '${ctx.body.userid.replace(/'/g, '')}'`)
    if (isAdmin.length > 0) {
        await query(`insert into public.recipes(author, title, markdown)
                     values ('${isAdmin[0].username}', '${ctx.body.title}', '${ctx.body.markdown}')`)
        ctx.response.status = 200
    } else {
        ctx.response.status = 401
    }
}