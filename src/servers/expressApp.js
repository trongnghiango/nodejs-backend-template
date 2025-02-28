const express = require('express')

const app = express()

app.route('/check-health').get((_, res) => {
  res.status(200).json({ msg: 'OK!!!' })
})

module.exports = app
