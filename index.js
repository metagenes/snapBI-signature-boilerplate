require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3001

const router = require('./route')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(router)

app.listen(port, () => {
	console.log(`this is running in port ${port}`)
})
