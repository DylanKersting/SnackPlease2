import { query } from '../query'
import bcrypt from 'bcrypt'

export const signIn = async (ctx) => {
  const username = ctx.request.body.username.replace(/'/g, '')
  const user = (await query(`select * from public.users where username = '${username}'`))[0]
  if (!user || !username.match('^[A-Za-z0-9_-]*$')) {
    ctx.response.status = 500;
    ctx.body = 'UserName or Password is incorrect'
  } else if (!await bcrypt.compare(ctx.request.body.password, user.hash)) {
    console.log(ctx.request.body)
    ctx.response.status = 500;
    ctx.body = 'UserName or Password is incorrect'
  } else {
    ctx.response.status = 200;
    ctx.response.body = (await query(`insert into public.active (username) values('${username}') returning *`))[0]
    ctx.response.body.admin = (await query(`select * from public.users where username = '${username}'`))[0].admin
  }
}

export const signUp = async (ctx) => {
  if(!ctx.request.body.username.match('^[A-Za-z0-9_-]*$')) {
    ctx.response.status = 500
    ctx.body = 'UserName Must Only Be Letters And Numbers'
  } else if (ctx.request.body.password === '') {
    ctx.response.status = 500
    ctx.body = 'Password Cannot Be Empty'
  } else {
    const salt = await bcrypt.genSalt(10)
    try {
      const user = await query(`insert into public.users (username, hash) values ('${ctx.request.body.username}', '${await bcrypt.hash(ctx.request.body.password, salt)}')`)
      ctx.body = 'User Successfully Created'
      ctx.response.status = 200
    } catch (e) {
      ctx.response.status = 500
      ctx.response.body ='UserName Already Taken'
    }
  }
}