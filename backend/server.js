const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const connectDB = require('./config/db')
connectDB()
const app = express()
const {errorHandler} = require('./middleware/errorMiddleware')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/goals', require('./routes/goalRoutes.js'))
app.use(errorHandler)

app.listen(port, () => console.log(`Server listening on ${port}`))

