const path = require('path')
global.appRoot = path.resolve(__dirname)
require = require('esm')(module)
require('./src/server')