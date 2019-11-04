const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.send('here ' + Math.random())
})

module.exports = router
