const express = require("express")
const app = express()
require("dotenv").config()
const port = process.env.WEBSITE_PORT || 3000
app.get('/', (req, res) => {
    res.send("<!DOCTYPE html><html><head><style>body{background-color:black;color:white;text-align:center;font-size:24px;margin-top:45vh;}</style></head><body><h1><a href='https://github.com/uqlel/website'>soon</a></h1></body></html>")
})
app.listen(port, () => {
    console.log('Listening on port ' + port)
})