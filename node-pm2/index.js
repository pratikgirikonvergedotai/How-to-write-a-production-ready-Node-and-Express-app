const express = require('express')
const app = express()

process.env.NODE_ENV = "production"

app.get("/", (req, res) => {
    res.json({name: "pm2"})
})

app.listen(8080)