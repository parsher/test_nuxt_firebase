const app = require('express')()

app.get('/', (req, res, next) => {
  res.send('hi ' + Math.random())
})

app.use('/hello', require('./hello'))

module.exports = { path: '/api', handler: app }
