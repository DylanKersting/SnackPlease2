
import fs from 'fs'
import path from 'path'
import DomServer from 'react-dom/server'
import react from 'react'



export const getMain = async (ctx) => {
  const text = fs.readFileSync(path.join(__dirname,'../templates/FoodCode/index.html'), 'utf-8')
  ctx.body = DomServer.renderToStaticMarkup(text);
  ctx.type = 'test/html'
  ctx.response.status = 200
}
