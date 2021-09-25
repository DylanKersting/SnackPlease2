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
    key: fs.readFileSync('/etc/letsencrypt/live/snackplease.com/privkey.pem', 'utf8'),
    cert: fs.readFileSync('/etc/letsencrypt/live/snackplease.com/fullchain.pem', 'utf8')
  }

  const unsafe = http.createServer(function(req, res) {  
    res.writeHead(302, {
      'Location': 'https://snackplease.com' + req.url
    })
    res.end()
  });

  unsafe.listen(80)

  https.createServer(config, app.callback()).listen(443)
} else {
  http.createServer(app.callback()).listen(4400)
}
console.log('Listening...')