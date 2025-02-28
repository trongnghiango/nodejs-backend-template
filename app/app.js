const express = require('express')
const  cors = require('cors')

const app = express()

// Cấu hình CORS
app.use(cors());

//
app.get('/check-health', (req, res) => {
    res.json({msg: "OK"})
})

module.exports = app