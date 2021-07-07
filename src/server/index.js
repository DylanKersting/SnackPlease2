import Koa from 'koa'
import router from './routes'
import https from 'https'
import http from 'http'
import fs from 'fs'
import path from 'path'

const koaBodyFile = require('koa-body')({multipart: true})

const app = new Koa()

app.use(koaBodyFile);
app.use(router)

if (!process.env.DEVELOPMENT) {
  const config = {
    key: fs.readFileSync(path.join(global.appRoot,'/ssl/server.key'), 'utf8'),
    cert: fs.readFileSync(path.join(global.appRoot,'./ssl/server.crt'), 'utf8'),
    ca: fs.readFileSync(path.join(global.appRoot,'./ssl/server.ca-bundle'), 'utf8')
  }

  const unsafe = http.createServer(function(req, res) {  
    res.writeHead(302, {
      'Location': 'https://hackjob.games' + req.url
    })
    res.end()
  });

  unsafe.listen(80)

  https.createServer(config, app.callback()).listen(443)
} else {
  http.createServer(app.callback()).listen(6969)
}
console.log('Listening...')